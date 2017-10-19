import {
  moduleForComponent,
  test
} from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('sub-header-with-back-link', 'Integration | Component | sub header with back link', {
  integration: true
})

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs `{{sub-header-with-back-link}}`)

  assert.equal(this.$('[data-test-sub-header-back-link]').text().trim(),
    'Back',
    'back link is visible')

  // Template block usage:
  this.render(hbs `
    {{#sub-header-with-back-link}}
      template block text
    {{/sub-header-with-back-link}}
  `)

  assert.equal(this.$('[data-test-sub-header-text]').text().trim(),
    'template block text',
    'the sub header text is rendered')
})
