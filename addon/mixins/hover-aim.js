import Ember from 'ember';

const {
  Mixin,
  inject: { service },
  computed,
  get,
  set,
} = Ember;

function getDistance(a = 0, b = 0) {
  const { pow, sqrt } = window.Math;

  return sqrt(pow((b.y - a.y), 2) + pow((b.x - a.x), 2));
}

function getSlope(a, b) {
  return (b.y - a.y) / (b.x - a.x);
}

export default Mixin.create({
  hoverAim: service(),

  aimTolerance: 100,
  anchorSelector: null,
  targetSubElementSelector: null,
  targetElementDirection: null,

  activateElement: Ember.K,
  deactivateElement: Ember.K,

  init(...args) {
    this._super(args);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  },

  didInsertElement(...args) {
    this._super(args);

    const anchors = Ember.A(this.$(get(this, 'anchorSelector')).toArray());

    set(this, 'anchors', anchors);
    anchors.forEach((item, index) => {
      const $item = this.$(item);

      $item.on('mouseenter', this.onMouseEnter);
      $item.on('mouseleave', this.onMouseLeave);
    });
  },

  willDestroyElement(...args) {
    this._super(args);

    this.$(get(this, 'anchors')).each((index, item) => {
      const $item = this.$(item);

      $item.off('mouseenter', this.onMouseEnter);
      $item.off('mouseleave', this.onMouseLeave);
    });
  },

  onMouseEnter(event) {
    const eventTarget = event.delegateTarget || event.currentTarget;

    if (!get(this, 'isMovingTowardsTarget')) {
      if (!get(this, 'hoverAim.activeElement')) {
        set(this, 'hoverAim.activeElement', eventTarget);
      }

      this.activateElement(eventTarget);
    }

    this.updateCurrentElementMouseMoveListener(event.relatedTarget);

    this.$(eventTarget).on('mousemove', this.onMouseMove);
  },

  onMouseLeave(event) {
    const eventTarget = event.delegateTarget || event.currentTarget;
    const currentElement = get(this, 'element');

    this.$(eventTarget).off('mousemove', this.onMouseMove);

    if (!get(this, 'isMovingTowardsTarget')) {
      this.deactivateElement(eventTarget);
      set(this, 'hoverAim.activeElement', eventTarget);
    } else if (event.toElement === currentElement) {
      this.$(currentElement).on('mousemove', this.onMouseMove);
    }
  },

  onMouseMove(event) {
    get(this, 'hoverAim').addMouseEvent({
      x: event.pageX,
      y: event.pageY,
    });

    if (!get(this, 'isMovingTowardsTarget')) {
      const eventTarget = event.delegateTarget || event.currentTarget;

      if (eventTarget !== get(this, 'hoverAim.activeElement')) {
        this.deactivateElement(get(this, 'hoverAim.activeElement'));
        set(this, 'hoverAim.activeElement', eventTarget);

        if (get(this, 'anchors').contains(eventTarget)) {
          this.activateElement(eventTarget);
        }

        this.updateCurrentElementMouseMoveListener(eventTarget);
      }
    }
  },

  updateCurrentElementMouseMoveListener(eventTarget) {
    const currentElement = get(this, 'element');

    if (eventTarget === currentElement) {
      console.log('\n\n\nRemoving mouse event listener\n\n\n');
      this.$(currentElement).off('mousemove', this.onMouseMove);
    }
  },

  slopeDirections: computed('targetElementDirection', 'targetElementOffsets', function () {
    let primaryCorner;
    let secondaryCorner;
    const {
      upperLeft,
      upperRight,
      lowerLeft,
      lowerRight,
    } = get(this, 'targetElementOffsets');

    switch (get(this, 'targetElementDirection')) {
      case 'left':
        primaryCorner = lowerLeft;
        secondaryCorner = upperLeft;
        break;
      case 'bottom':
        primaryCorner = lowerRight;
        secondaryCorner = lowerLeft;
        break;
      case 'top':
        primaryCorner = upperLeft;
        secondaryCorner = upperRight;
        break;
      default:
        primaryCorner = upperLeft;
        secondaryCorner = lowerLeft;
        break;
    }

    return { primaryCorner, secondaryCorner };
  }),

  isMovingTowardsTarget: computed(
    'hoverAim.mouseLocations',
    '$targetElement',
    'targetElementDirection',
    'hoverAim.activeElement',
    function () {
      const { mouseLocations } = this.get('hoverAim');

      if (!Ember.isPresent(get(this, 'hoverAim.activeElement')) || !Ember.isPresent(mouseLocations)) {
        return false;
      }

      const currentMouseLocation = mouseLocations[mouseLocations.length - 1];
      const previousMouseLocation = mouseLocations[0] ? mouseLocations[0] : currentMouseLocation;
      const { primaryCorner, secondaryCorner } = this.get('slopeDirections');
      const previousDistanceToPrimaryCorner = getDistance(previousMouseLocation, primaryCorner);
      const previousDistanceToSecondaryCorner = getDistance(previousMouseLocation, secondaryCorner);
      const distanceToPrimaryCorner = getDistance(currentMouseLocation, primaryCorner);
      const distanceToSecondaryCorner = getDistance(currentMouseLocation, secondaryCorner);

      if (distanceToPrimaryCorner < previousDistanceToPrimaryCorner || distanceToSecondaryCorner < previousDistanceToSecondaryCorner) {
        const slopeOfMouseMovement = getSlope(previousMouseLocation, currentMouseLocation);
        const yInterceptOfTarget = slopeOfMouseMovement * (primaryCorner.x - currentMouseLocation.x) + currentMouseLocation.y;
        const aimTolerance = get(this, 'aimTolerance');

        return yInterceptOfTarget >= primaryCorner.y - aimTolerance && yInterceptOfTarget <= secondaryCorner.y + aimTolerance;
        // if (yInterceptOfTarget >= primaryCorner.y - aimTolerance && yInterceptOfTarget <= secondaryCorner.y + aimTolerance) {
        //   return true;
        // } else {
        //   console.log(`\n\n\nY Intercept: ${yInterceptOfTarget}\nPrimary Corner Y: ${primaryCorner.y - aimTolerance}\nSecondary Corner Y: ${secondaryCorner.y + aimTolerance}\nPrevious Mouse Location: ${previousMouseLocation.y}\nCurrentMouse Location: ${currentMouseLocation.y}\nSlope: ${slopeOfMouseMovement}\n\n\n`);
        //   return false;
        // }
      }
    }).volatile(),

  targetElementOffsets: computed('targetSubElementSelector', function () {
    const { activeElement } = get(this, 'hoverAim');
    const targetSubElementSelector = get(this, 'targetSubElementSelector');
    const targetSubElement = Ember.$(activeElement).find(targetSubElementSelector);
    const targetSubElementOffset = targetSubElement.offset();
    const upperLeft = {
      x: targetSubElementOffset.left,
      y: targetSubElementOffset.top,
    };
    const upperRight = {
      x: targetSubElementOffset.left + targetSubElement.outerWidth(),
      y: upperLeft.y,
    };
    const lowerLeft = {
      x: targetSubElementOffset.left,
      y: targetSubElementOffset.top + targetSubElement.outerHeight(),
    };
    const lowerRight = {
      x: targetSubElementOffset.left + targetSubElement.outerWidth(),
      y: lowerLeft.y,
    };

    return { upperLeft, upperRight, lowerLeft, lowerRight };
  }),
});
