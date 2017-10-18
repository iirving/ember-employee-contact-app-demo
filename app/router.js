import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function() {
  this.route('employees')
  this.route('settings')
  this.route('employee', {
    path: '/employee/:employee_id'
  }, function() {
    this.route('new')
  })
})

export default Router
