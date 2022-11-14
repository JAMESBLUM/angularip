(function(){

var app = angular.module('ejemplosApp',[ ]);
app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
  //http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK

  $http.jsonp('http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK').success(function(data){
  		//Codigo cuando es correcta la petición
  		$scope.geoplugin = data;
		console.log(data)
  	});
}]);
})();
