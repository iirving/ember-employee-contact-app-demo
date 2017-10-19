import {
  moduleForComponent,
  test
} from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'
import {
  startMirage
} from 'contacts/initializers/ember-cli-mirage'

moduleForComponent('employee-list', 'Integration | Component | employee list', {
  integration: true,
  beforeEach() {
    this.server = startMirage()
  },
  afterEach() {
    this.server.shutdown()
  }
})

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs `{{employee-list}}`)

  assert.equal(this.$().text().trim(), '')

  // Template block usage:
  this.render(hbs `
    {{#employee-list}}
      template block text
    {{/employee-list}}
  `)

  assert.equal(this.$().text().trim(), 'template block text')
})

test('it renders all the employees in the list', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  const model = server.createList('employee', 12)
  // let model = employees[0]
  this.set('model', model)
  // this.set('employee', model)
  // let fName = model.firstName
  // let lName = model.lastName

  // let fullName = model.get('fullName')
  // //  console.log('fullName', fullName)
  // {{employee-list employees=model}}
  this.render(hbs `{{employee-list employees=model}}`)

  assert.equal(this.$('tbody tr').length,
    12,
    'all the empoyess row are renderd')
})
