import {
  clickable,
  collection,
  create,
  text,
  visitable
} from 'ember-cli-page-object'

export default create({
  visit: visitable('/employees'),
  newEmployeeAction: clickable('[data-test-new-link]'),
  employess: collection({
    itemScope: 'data-test-employee-record',
    item: {
      firstName: text('td', {
        at: 1
      }),
      lastName: text('td', {
        at: 2
      })
    }
  })

})
