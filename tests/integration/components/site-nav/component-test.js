import {
  moduleForComponent,
  test
} from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('site-nav', 'Integration | Component | site nav', {
  integration: true
})

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs `{{site-nav}}`)

  assert.equal(this.$('[data-test-link-to-employees]').text().trim(), 'Employees', 'Employees nav link is rendered')
  assert.equal(this.$('[data-test-link-to-settings]').text().trim(), 'Settings', 'Settings nav link is rendered')
})
