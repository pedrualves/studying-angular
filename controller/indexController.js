meuApp.controller('indexController', function ($scope) {
	$scope.xyz = 'timao';
  $scope.campo1 = '';
  $scope.campo2 = '';
  $scope.enviar = function(){
    console.log($scope.campo1);
    console.log($scope.campo2);
  }
})

.config(function($routeProvider) {
  $routeProvider
   .when('/abc/', {
   	
    templateUrl: 'page/abc.html',
    controller: 'indexController'
  })
  .when('/def/', {
  	
    templateUrl: 'page/def.html',
    controller: 'indexController'
  });
});