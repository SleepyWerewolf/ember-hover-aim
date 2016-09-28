import Ember from 'ember';
import zfDropdownMenu from 'ember-cli-foundation-6-sass/components/zf-dropdown-menu';
import HoverAimable from 'ember-hover-aim/mixins/hover-aim';

export default zfDropdownMenu.extend(HoverAimable, {
  classNames: ['test-dropdown-menu'],

  anchorSelector: '>li',

  targetSubElementSelector: '.submenu.is-dropdown-submenu',

  targetElementDirection: 'right',

  activateElement(targetElement) {
    this.$(targetElement).addClass('open');
  },

  deactivateElement(targetElement) {
    this.$(targetElement).removeClass('open');
  },
});
