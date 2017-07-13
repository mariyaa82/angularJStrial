(function() {
var app = angular.module('testApp', []);

app.controller('TabController', function() {
    this.tab = 1;

    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };

    this.setTab = function(activeTab) {
      this.tab = activeTab;
    }
});

app.controller('TableController', function($scope, $http) {
	$scope.persons = [];
	$http.get('persons.php').then(function (response){
	$scope.persons = response.data.persons;
	
	});
	
	 $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
	});
})();