import Ember from 'ember'

export default Ember.Route.extend({
  model() {
    return [{
      firstName: 'John',
      lastName: 'Smith',
      email: 'js@bigCo.com',
      phoneNumber: '555-555-1234',
      department: 'Sales'
    }, {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jd@bigCo.com',
      phoneNumber: '555-555-1235',
      department: 'Marketing'
    }]
  }
})
