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

  aimTolerance: 50,
  anchorSelector: null,
  targetSubElementSelector: null,
  targetElementDirection: null,

  init(...args) {
    this._super(args);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  },

  didInsertElement(...args) {
    this._super(args);

    const anchors = this.$(get(this, 'anchorSelector'));

    set(this, 'anchors', anchors);
    anchors.each((index, item) => {
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
    const target = event.delegateTarget || event.currentTarget;

    if (!get(this, 'isMovingTowardsTarget')) {
      if (!get(this, 'hoverAim.activeElement')) {
        set(this, 'hoverAim.activeElement', target);
      }

      this.activateElement(target);
    }

    this.$(target).on('mousemove', this.onMouseMove);
  },

  onMouseLeave(event) {
    const target = event.delegateTarget || event.currentTarget;

    this.$(target).off('mousemove', this.onMouseMove);

    if (target === get(this, 'hoverAim.activeElement') && !get(this, 'isMovingTowardsTarget')) {
      if (this.deactivateElement) {
        this.deactivateElement();
      }
    }
  },

  onMouseMove(event) {
    get(this, 'hoverAim').addMouseEvent({
      x: event.pageX,
      y: event.pageY,
    });

    if (!get(this, 'isMovingTowardsTarget')) {
      const target = event.delegateTarget || event.currentTarget;

      if (target !== get(this, 'hoverAim.activeElement')) {
        if (this.deactivateElement) {
          this.deactivateElement(get(this, 'hoverAim.activeElement'));
        }

        set(this, 'hoverAim.activeElement', target);
        this.activateElement(target);
      }
    }
  },

  slopeDirections: computed('targetElementDirection', 'targetElementOffsets', function () {
    let decreasingCorner;
    let increasingCorner;
    const {
      upperLeft,
      upperRight,
      lowerLeft,
      lowerRight,
    } = get(this, 'targetElementOffsets');

    switch (get(this, 'targetElementDirection')) {
      case 'left':
        decreasingCorner = lowerLeft;
        increasingCorner = upperLeft;
        break;
      case 'bottom':
        decreasingCorner = lowerRight;
        increasingCorner = lowerLeft;
        break;
      case 'top':
        decreasingCorner = upperLeft;
        increasingCorner = upperRight;
        break;
      default:
        decreasingCorner = upperLeft;
        increasingCorner = lowerLeft;
        break;
    }

    return { decreasingCorner, increasingCorner };
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
      const { decreasingCorner, increasingCorner } = this.get('slopeDirections');
      const previousDistanceA = getDistance(previousMouseLocation, decreasingCorner);
      const previousDistanceB = getDistance(previousMouseLocation, increasingCorner);
      const distanceA = getDistance(currentMouseLocation, decreasingCorner);
      const distanceB = getDistance(currentMouseLocation, increasingCorner);

      if (distanceA < previousDistanceA || distanceB < previousDistanceB) {
        const slopeOfMouseMovement = getSlope(previousMouseLocation, currentMouseLocation);
        const yOfDestination = slopeOfMouseMovement * (decreasingCorner.x - currentMouseLocation.x) + currentMouseLocation.y;
        const aimTolerance = get(this, 'aimTolerance');

        console.log(`Checking if ${yOfDestination} is between ${decreasingCorner.y - 50} and ${increasingCorner.y + 50}`);
        return yOfDestination >= decreasingCorner.y - aimTolerance && yOfDestination <= increasingCorner.y + aimTolerance;
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
