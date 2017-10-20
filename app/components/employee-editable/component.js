import Ember from 'ember'

export default Ember.Component.extend({

  actions: {

    Save(param) {
      let employee = this.get('employee')

      employee.validate()
        .then(({
          validations
        }) => {
          if (validations.get('isValid')) {
            this.sendAction('action', param)
          }
        })
    }
  }

})
