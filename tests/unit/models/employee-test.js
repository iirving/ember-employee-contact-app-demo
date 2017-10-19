import {
  moduleForModel,
  test
} from 'ember-qunit'
import Ember from 'ember'

moduleForModel('employee', 'Unit | Model | employee', {
  // Specify the other units that are required for this test.
  needs: []
})

test('correctly computes fullname', function(assert) {
  let employee = this.subject()

  Ember.run(() => employee.set('firstName', 'ian'))
  Ember.run(() => employee.set('lastName', 'irving'))

  assert.equal(employee.get('fullName'), 'ian irving')
})
