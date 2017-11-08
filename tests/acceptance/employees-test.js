import {
  test
} from 'qunit'
import employeesPage from 'contacts/tests/pages/employees'
import moduleForAcceptance from 'contacts/tests/helpers/module-for-acceptance'

moduleForAcceptance('Acceptance | employees')

test('visiting /employees', function(assert) {
  employeesPage
    .visit()

  andThen(function() {
    assert.equal(currentURL(), '/employees')
  })
})

test('from the employees page select the new employee action and go to settings page', function(assert) {
  employeesPage
    .visit()
    .newEmployeeAction()

  andThen(function() {
    assert.equal(currentURL(), '/employee/new')
  })
})

test('from the employees, show all the employees.', function(assert) {
  server.createList('employees', 3)
  employeesPage
    .visit()

  andThen(function() {
    assert.equal(employeesPage.employess().count, 3)
  })
})
