import Ember from 'ember';
import HoverAimMixin from 'ember-hover-aim/mixins/hover-aim';
import { module, test } from 'qunit';

module('Unit | Mixin | hover aim');

// Replace this with your real tests.
test('it works', function(assert) {
  let HoverAimObject = Ember.Object.extend(HoverAimMixin);
  let subject = HoverAimObject.create();
  assert.ok(subject);
});
