import Ember from 'ember'

export default Ember.Mixin.create({

  password: `^(?=.{8,32}$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*`
  /*  Length between 8 and 32 characters.
    One or more uppercase letters.
    One or more lowercase letters.
    One or more numbers.
  */
})
