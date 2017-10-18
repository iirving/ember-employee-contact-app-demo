import Ember from 'ember'

export default Ember.Route.extend({
  model() {
    console.log('employee.new model')
    var newRecord = this.store.createRecord('employee')
    return newRecord
  }
})
