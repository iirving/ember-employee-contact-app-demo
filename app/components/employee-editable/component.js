import Ember from 'ember'

export default Ember.Component.extend({

  actions: {

    Save(param) {
      let employee = this.get('employee')

      employee.validate()
        .then(({
          validations
        }) => {
          console.log('pre validate', validations)
          if (validations.get('isValid')) {
            console.log('isValid')
            this.sendAction('action', param)
          }
        })
    }
  }

})
