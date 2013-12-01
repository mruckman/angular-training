var shoppingApp = angular.module('shoppingApp', []);

shoppingApp.factory('Items', function() {
	var items = [
		{title: 'Paint pots', quantity: 8, price: 3.93},
		{title: 'Polka dots', quantity: 17, price: 12.93},
		{title: 'Fruity Pebbles', quantity: 5, price: 6.93}
	];
	return items;
})

function CartController($scope, Items) {
	$scope.items = Items;

	$scope.remove = function (index) {
		$scope.items.splice(index, 1);
	}

	// NOTE: HAVE THE TOTALS ALWAYS UPDATE AFTER EACH CHANGE
	$scope.$watch(function () {
		var total = 0;
		for (var key in $scope.items) {
			total += ($scope.items[key].price * $scope.items[key].quantity);
		}
		$scope.total = total.toFixed(2);
	});
}
