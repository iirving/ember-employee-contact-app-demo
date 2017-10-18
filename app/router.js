import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function() {
  this.route('employees')
  this.route('settings')
  this.route('employee', function() {
    this.route('new')
    this.route('index', {
      path: '/:employee_id'
    })
    this.route('edit', {
      path: '/:employee_id/edit'
    })
  })
})

export default Router
