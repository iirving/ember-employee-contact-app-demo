import DS from 'ember-data'
import Ember from 'ember'
import {
  validator,
  buildValidations
} from 'ember-cp-validations'
import RegexpatternsMixin from 'contacts/mixins/regexpatterns'

const Validations = buildValidations({
  firstName: validator('presence', true),
  lastName: validator('presence', true),
  email: [
    validator('presence', true),
    validator('format', {
      type: 'email'
    })
  ],
  phoneNumber: validator('presence', true),
  department: validator('presence', true),
  password: [
    validator('presence', true),
    validator('format', {
      regex: `/${RegexpatternsMixin.password}/`,
      message: 'Password must include at least one upper case letter, one lower case letter, and a number'
    })
  ]
})

export default DS.Model.extend(Validations, {
  firstName: DS.attr(),
  lastName: DS.attr(),
  email: DS.attr(),
  phoneNumber: DS.attr(),
  department: DS.attr(),
  password: DS.attr(),

  fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`
  })

})
