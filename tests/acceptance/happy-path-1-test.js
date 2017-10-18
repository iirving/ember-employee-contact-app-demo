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

test('link to settings on home page', function(assert) {
  visit('/')

  andThen(function() {
    assert.equal(currentURL(), '/settings')
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
