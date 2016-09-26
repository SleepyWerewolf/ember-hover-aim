import Ember from 'ember';

const DEFAULT_TOLERANCE = 100;
const {
  Mixin,
  inject: { service },
  computed,
  get,
  set,
} = Ember;

export default Mixin.create({
  hoverTriangulation: service(),

  init() {
    this._super(...arguments);

    this.onMouseMove = this.onMouseMove.bind(this);
  },

  mouseEnter() {
    const currentElement = get(this, 'element');

    if (!get(this, 'isMovingTowardsTarget') || !get(this, 'hoverTriangulation.activeElement')) {
      set(this, 'hoverTriangulation.activeElement', currentElement);
      this.activateElement();
    }

    currentElement.addEventListener('mousemove', this.onMouseMove);
  },

  mouseLeave() {
    console.log('\n\n\nDeactivating element\n\n\n');
    get(this, 'element').removeEventListener('mousemove', this.onMouseMove);
  },

  onMouseMove(event) {
    get(this, 'hoverTriangulation').addMouseEvent({
      x: event.pageX,
      y: event.pageY,
    });

    if (!get(this, 'isMovingTowardsTarget')) {
      console.log('\n\n\nNot moving towards target\n\n\n');

      if (get(this, 'isActiveElement')) {
        if (this.deactivate) {
          this.deactivate();
        }
      } else {
        set(this, 'hoverTriangulation.activeElement', get(this, 'element'));
        this.activateElement();
      }
    } else {
      console.log('\n\n\nMoving towards target\n\n\n');
    }
  },

  isActiveElement: computed.equal('element', 'hoverTriangulation.activeElement'),

  slopeDirections: computed('subElementDirection', 'subElementOffsets', function () {
    let decreasingCorner;
    let increasingCorner;
    const {
      upperLeft,
      upperRight,
      lowerLeft,
      lowerRight,
    } = get(this, 'subElementOffsets');

    switch (this.get('subElementDirection')) {
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
    'hoverTriangulation.mouseLocations',
    '$subElement',
    'subElementDirection',
    function () {
    const { mouseLocations } = this.get('hoverTriangulation');

    if (mouseLocations.length === 0) {
      return true;
    }

    const currentMouseLocation = mouseLocations[mouseLocations.length - 1];
    const previousMouseLocation = mouseLocations[0] ? mouseLocations[0] : currentMouseLocation;
    const { decreasingCorner, increasingCorner } = this.get('slopeDirections');
    const previousDistanceA = this.getDistance(previousMouseLocation, decreasingCorner);
    const previousDistanceB = this.getDistance(previousMouseLocation, increasingCorner);
    const distanceA = this.getDistance(currentMouseLocation, decreasingCorner);
    const distanceB = this.getDistance(currentMouseLocation, increasingCorner);

    if (distanceA < previousDistanceA || distanceB < previousDistanceB) {
      const slopeOfMouseMovement = this.getSlope(previousMouseLocation, currentMouseLocation);
      const yOfDestination = slopeOfMouseMovement * (decreasingCorner.x - currentMouseLocation.x) + currentMouseLocation.y;

      console.log(`Checking if ${yOfDestination} is between ${decreasingCorner.y - 50} and ${increasingCorner.y + 50}`);
      return yOfDestination >= decreasingCorner.y - DEFAULT_TOLERANCE && yOfDestination <= increasingCorner.y + DEFAULT_TOLERANCE;
    }
  }).volatile(),

  subElementOffsets: computed('$subElement', function () {
    const subElement = get(this, '$subElement');
    const subElementOffset = subElement.offset();
    const upperLeft = {
      x: subElementOffset.left,
      y: subElementOffset.top,
    };
    const upperRight = {
      x: subElementOffset.left + subElement.outerWidth(),
      y: upperLeft.y,
    };
    const lowerLeft = {
      x: subElementOffset.left,
      y: subElementOffset.top + subElement.outerHeight(),
    };
    const lowerRight = {
      x: subElementOffset.left + subElement.outerWidth(),
      y: lowerLeft.y,
    };

    return { upperLeft, upperRight, lowerLeft, lowerRight };
  }),

  getDistance(a=0, b=0) {
    const { pow, sqrt } = window.Math;

    return sqrt(pow((b.y - a.y), 2) + pow((b.x - a.x), 2));
  },

  getSlope(a, b) {
    return (b.y - a.y) / (b.x - a.x);
  },
});
