import Ember from 'ember';
import zfDropdownMenu from 'ember-cli-foundation-6-sass/components/zf-dropdown-menu';
import HoverAimable from 'ember-hover-aim/mixins/hover-aim';

export default zfDropdownMenu.extend(HoverAimable, {
  classNames: ['my-dropdown-menu'],

  anchorSelector: '>li',
});
