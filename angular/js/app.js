'use strict';

var socketApp = angular.module('socketApp', [
  'ngRoute',
  'socketApp.controllers.home',
  'socketApp.services.home'
])
.run(function() {});
