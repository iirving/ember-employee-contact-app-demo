import Ember from 'ember'

export default Ember.Component.extend({

  actions: {

    Save(param) {
      this.sendAction('action', param)
    }
  }

})
