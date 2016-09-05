socketApp.config(['$routeProvider',
function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  }).
  otherwise({
    redirectTo: '/'
  });
}])
