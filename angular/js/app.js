'use strict';

var socketApp = angular.module('socketApp', [
  'btford.socket-io',
  'ngRoute',
  'socketApp.controllers.home',
  'socketApp.services.home',
  'socketApp.services.socket'
])
.run(function() {});
