import Ember from 'ember';
import zfTooltip from 'ember-cli-foundation-6-sass/components/zf-tooltip';
import HoverAimable from 'ember-hover-aim/mixins/hover-aim';

const { get, set } = Ember;

export default zfTooltip.extend(HoverAimable, {
  classNames: ['aimable-tooltip'],
  classNameBindings: ['showInvisibleExtension'],

  closingTime: 0,
  disableHover: true,

  activateElement() {
    this.$(get(this, 'element')).foundation('show');
    set(this, 'showInvisibleExtension', true);
  },

  deactivateElement() {
    this.$(get(this, 'element')).foundation('hide');
    set(this, 'showInvisibleExtension', false);
  },
});
