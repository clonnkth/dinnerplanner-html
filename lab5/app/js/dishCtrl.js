// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {
  
  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case
  	Dinner.Dish.get({id:$routeParams.dishId},function(data){
	     $scope.singleDish = data;
	     //console.log(data.Ingredients)
	},function(data){
	     $scope.status = "There was an error";
	});

	 $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  	}

  	$scope.addDishToMenu = function(data) {
      Dinner.addDishToMenu(data);
  	}

    // $scope.removeDishFromMenu = function(id) {
   // return Dinner.removeDishFromMenu(id);
  //}
  
});