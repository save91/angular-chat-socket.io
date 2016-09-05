angular.module('socketApp.controllers.home', [])

.controller('HomeCtrl',  function($scope, mySocket) {
  mySocket.on('connect', function() {

  });
});
