import {
  test
} from 'qunit'
import moduleForAcceptance from 'contacts/tests/helpers/module-for-acceptance'

moduleForAcceptance('Acceptance | happy path 1')

test('show list of contact employees on home page', function(assert) {
  visit('/')

  andThen(function() {
    assert.equal(currentURL(), '/employees')
  })
})

test('link to employees on home page', function(assert) {
  visit('/')
  click('[data-test-link-to-employees] a')
  andThen(function() {
    assert.equal(currentURL(), '/employees')
  })
})

test('link to settings on home page', function(assert) {
  visit('/')
  click('[data-test-link-to-settings] a')
  andThen(function() {
    assert.equal(currentURL(), '/settings')
  })
})

test('link to home page from another page via the header', function(assert) {
  visit('/settings')
  click('[data-test-link-to-index] a')
  andThen(function() {
    assert.equal(currentURL(), '/employees')
  })
})

test('from the home page open a contact detail', function(assert) {
  visit('/')

  andThen(function() {
    assert.equal(currentURL(), '/')
  })
})

test('from the home page open a contect detail, edit it and save it', function(assert) {
  visit('/')

  andThen(function() {
    assert.equal(currentURL(), '/')
  })
})
