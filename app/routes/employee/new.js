import Ember from 'ember'

export default Ember.Route.extend({
  model() {
    //    console.log('employee.new model')
    var newRecord = this.store.createRecord('employee')
    return newRecord
  },

  actions: {

    newEmployee(employee) {
      var id = employee.get('id')
      employee.save().then(() => this.transitionTo('employees'))
    },

    willTransition(transition) {
      let model = this.controller.get('model')
      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?")
        // use a dialog instead?

        if (confirmation) {
          model.rollbackAttributes()
        } else {
          transition.abort()
        }
      }
    }
  }
})
