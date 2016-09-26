import Ember from 'ember';

const {
  A,
  Service,
  get,
} = Ember;
const MAX_MOUSE_LOCATIONS = 10;

export default Service.extend({
  activeElement: null,
  mouseLocations: A(),

  addMouseEvent(mouseEvent) {
    const mouseLocations = get(this, 'mouseLocations');

    mouseLocations.push({
      x: mouseEvent.x,
      y: mouseEvent.y,
    });

    if (mouseLocations.length >= MAX_MOUSE_LOCATIONS) {
      mouseLocations.shift();
    }
  },
});
