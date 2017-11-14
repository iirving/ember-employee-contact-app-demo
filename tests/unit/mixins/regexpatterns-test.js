import Ember from 'ember'
import RegexpatternsMixin from 'contacts/mixins/regexpatterns'
import {
  module,
  test
} from 'qunit'

module('Unit | Mixin | regexpatterns')

test('password regex works', function(assert) {
  /*  Length between 8 and 32 characters.
    One or more uppercase letters.
    One or more lowercase letters.
    One or more numbers.
  */
  let RegexpatternsObject = Ember.Object.extend(RegexpatternsMixin)
  let subject = RegexpatternsObject.create()
  let passwordRegex = subject.password

  assert.ok('Password3'.match(passwordRegex), 'Password3 is a valid password')

  assert.notOk('Password'.match(passwordRegex), 'Password is a not valid password')
  assert.notOk('password'.match(passwordRegex), 'password is a not valid password')
  assert.notOk('12345678'.match(passwordRegex), '12345678 is a not valid password')
  assert.notOk('Pass1'.match(passwordRegex), 'Pass1 is a not valid password')
})
