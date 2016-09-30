import Ember from 'ember';
import zfDropdownMenu from 'ember-cli-foundation-6-sass/components/zf-dropdown-menu';
import HoverAimable from 'ember-hover-aim/mixins/hover-aim';

const { set } = Ember;

export default zfDropdownMenu.extend(HoverAimable, {
  classNames: ['test-dropdown-menu'],
  classNameBindings: ['showInvisibleExtension'],

  showInvisibleExtension: false,

  activateElement(targetElement) {
    this.$(targetElement).addClass('open');
    set(this, 'showInvisibleExtension', true);
  },

  deactivateElement(targetElement) {
    this.$(targetElement).removeClass('open');
    set(this, 'showInvisibleExtension', false);
  },
});
