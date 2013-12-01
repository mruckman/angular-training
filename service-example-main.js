var myApp = angular.module('myApp', []);

myApp.factory('Data', function() {
	return {message:"I'm data from a service"}
})

myApp.filter('titleCase', function(Data) {
	var titleCaseFilter = function(input) {
		var words = input.split(' ');
		for (var i = 0; i < words.length; i++) {
			words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
		}
		return words.join(' ') + " and " + Data.message;
	};
	return titleCaseFilter;
});

function FirstCtrl($scope, Data) {
	$scope.pageHeading = 'behold the majesty of your page title';
	$scope.data = Data;
}

function SecondCtrl($scope, Data) {
	$scope.data = Data;
}