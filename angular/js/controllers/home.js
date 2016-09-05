angular.module('socketApp.controllers.home', [])

.controller('HomeCtrl',  function($scope, mySocket) {
  $scope.messages = [];
  $scope.message = "Scrivi qualcosa";

  mySocket.on('chat message', function(data) {
    $scope.messages.push({text: data});
  })


  $scope.send = function() {
    mySocket.emit('chat message', $scope.message);
    $scope.message = "";
  };



});
