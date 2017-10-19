import {
  moduleForComponent,
  test
} from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'
import {
  startMirage
} from 'contacts/initializers/ember-cli-mirage'
import Ember from 'ember'

moduleForComponent('employee-detail', 'Integration | Component | employee detail', {
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

  const employees = server.createList('employee', 4).map(emp => Ember.Object.create(emp))

  let model = employees[0]
  this.set('model', model)
  this.set('employee', model)
  //  model.model = model
  // let fName = model.firstName
  // let lName = model.lastName

  // let fullName = model.get('fullName')
  //  console.log('fullName', fullName)

  // {{employee-detail employee=model}}
  this.render(hbs `{{employee-detail employee=model}}`)

  assert.equal(this.$('[data-test-employee-detail-full-name-label]').text().trim(),
    'Name:',
    'the name label is present')

  // TODO : promblems rendering the data
  // assert.equal(this.$('[data-test-employee-detail-full-email]').text().trim(),
  //   model.email + fullName,
  //   // fName + ' ' + lName + '>' + model.fullName,
  //   'the fullName value is present')
})
