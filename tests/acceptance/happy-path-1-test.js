import {
  test
} from 'qunit'
import moduleForAcceptance from 'contacts/tests/helpers/module-for-acceptance'
// import employeesPage from 'contacts/tests/pages/employees'

moduleForAcceptance('Acceptance | happy path 1')

test('from the root url show the employees page', function(assert) {
  visit('/')

  andThen(function() {
    assert.equal(currentURL(), '/employees')
  })
})

test('link to employees from the settings page', function(assert) {
  visit('/settings')
  click('[data-test-link-to-employees]')
  andThen(function() {
    assert.equal(currentURL(), '/employees')
  })
})

test('link to settings on home page', function(assert) {
  visit('/')
  click('[data-test-link-to-settings]')
  andThen(function() {
    assert.equal(currentURL(), '/settings')
  })
})

test('link to home page from another page via the header', function(assert) {
  visit('/settings')
  click('[data-test-link-to-index]')
  andThen(function() {
    assert.equal(currentURL(), '/employees')
    assert.equal(find('[data-test-site-header] a').text(), 'Contacts Manager', 'header has the right test')
  })
})

test('from the employees page open a contact detail', function(assert) {
  let employees = server.createList('employees', 3)
  let e_id = employees[0].id

  visit('/employees')
  click('tbody tr:first td:nth-child(2) a')

  andThen(function() {
    assert.equal(currentURL(), `/employee/${e_id}`, 'we are on the employee page for id ' + e_id)
    //    assert.equal(find(['data-test-sub-header-text']).text(), 'Employee Edit', 'we have the right sub header text')
    // assert.equal(find('tbody tr').length, 3, 'we have the 3 employees')
    // assert.equal(find('tbody tr:first td:nth-child(2) a').text(), employees[0].firstName, 'first name is in the second table cell')
  })
})

test('from the employees page open a contact detail and test the back button link', function(assert) {
  server.createList('employees', 3)

  visit('/employees')
  click('tbody tr:first td:nth-child(2) a') // go to the first data row and click a a link
  click('[data-test-sub-header-back-link]') // click on the back link in the sub header

  andThen(function() {
    assert.equal(currentURL(), '/employees', 'we are back on the employees list page')
  })
})

test('from the employees page open a detail page, and edit it', function(assert) {
  let employees = server.createList('employees', 3)
  let e_id = employees[0].id

  visit('/employees')
  click('tbody tr:first td:nth-child(2) a') // go to the first data row and click a a link
  click('[data-test-employee-edit-link]') // click on the edit link

  andThen(function() {
    assert.equal(currentURL(), `/employee/${e_id}/edit`,
      'we are on the employee edit page for id ' + e_id)
  })
})

test('from the employees page open a detail page, edit it and the cancel it', function(assert) {
  let employees = server.createList('employees', 3)
  let e_id = employees[0].id

  visit('/employees')
  click('tbody tr:first td:nth-child(2) a') // go to the first data row and click a a link
  click('[data-test-employee-edit-link]') // click on the edit link
  click('[data-test-cancel-link]') // click on the cancel link

  andThen(function() {
    assert.equal(currentURL(), `/employee/${e_id}`,
      'we are on the employee detail page for id ' + e_id)
  })
})

test('97 from the employees page open a detail page, edit it and save it', function(assert) {
  let employees = server.createList('employees', 3)
  let e_id = employees[0].id

  visit('/employees')

  andThen(function() {
    click('tbody tr:first td:nth-child(2) a') // go to the first data row and click a a link

    click('[data-test-employee-edit-link]') // click on the edit link
    fillIn('[data-test-first-name]', 'first')
    fillIn('[data-test-last-name]', 'last')

    fillIn('[data-test-email]', 'eamil@company.com')
    fillIn('[data-test-phone-number]', '555-555-5555')
    fillIn('[data-test-department]', 'department')
  })

  click('[data-test-button-submit]')

  andThen(function() {
    assert.equal(currentURL(), `/employee/${e_id}`,
      'we are on the employee details page for id ' + e_id)
    assert.equal(find('[data-test-employee-detail-full-name]').text(), 'first last',
      'the edit is now displayed on the detailed page')
  })
})

test('121 open a new employee page, edit it and save it', function(assert) {
  assert.expect(1)
  visit('/employee/new')
  andThen(function() {
    fillIn('[data-test-first-name]', 'first')
    fillIn('[data-test-last-name]', 'last')

    fillIn('[data-test-email]', 'eamil@company.com')
    fillIn('[data-test-phone-number]', '555-555-5555')
    fillIn('[data-test-department]', 'department')

    click('[data-test-button-submit]').then(function() {
      assert.equal(currentURL(), `/employees`,
        'we are on the employees list page')
      // assert.equal(find('[data-test-employee-detail-full-name]').text(), 'first last',
      //   'the edit is now displayed on the detailed page')
    })
  })
})
