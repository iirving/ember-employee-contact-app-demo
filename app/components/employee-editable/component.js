import Ember from 'ember'

export default Ember.Component.extend({

  actions: {

    Save(param) {
      console.log('save action', param)
      this.sendAction('action', param)
    }
  }

})
