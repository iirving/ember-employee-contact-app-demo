import {
  moduleForComponent,
  test
} from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('employee-editable', 'Integration | Component | employee editable', {
  integration: true
})

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs `{{employee-editable}}`)

  assert.equal(
    this.$('[data-test-first-name]').attr('placeholder').trim(),
    'First Name',
    'First Name field is rendered '
  )

  assert.equal(
    this.$('[data-test-last-name]').attr('placeholder').trim(),
    'Last Name',
    'Last Name field is rendered '
  )

  assert.equal(
    this.$('[data-test-email]').attr('placeholder').trim(),
    'Email',
    'Email field is rendered '
  )

  assert.equal(
    this.$('[data-test-phone-number]').attr('placeholder').trim(),
    'Telephone',
    'Telephone field is rendered '
  )

  assert.equal(
    this.$('[data-test-department]').attr('placeholder').trim(),
    'Department',
    'Department field is rendered '
  )
})
