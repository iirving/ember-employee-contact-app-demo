import Ember from 'ember'

export default Ember.Route.extend({
  // store: Ember.inject.service(),

  model() {
    //    let store = this.store

    return this.get('store').push({
      data: [{
        id: 1,
        type: 'employee',
        attributes: {
          firstName: 'John',
          lastName: 'Smith',
          email: 'js@bigCo.com',
          phoneNumber: '555-555-1234',
          department: 'Sales'
        },
        relationships: {}
      }, {
        id: 2,
        type: 'employee',
        attributes: {
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'jd@bigCo.com',
          phoneNumber: '555-555-1235',
          department: 'Marketing'
        },
        relationships: {}

      }]

    })
  }

})
