
dinnerPlannerApp.controller('ConfirmedCtrl', function ($scope,Dinner) {

  $scope.menu = Dinner.getFullMenu();

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }

  $scope.getTotalDishPrice = function(item) {
    return Dinner.getTotalDishPrice(item);
  }

  $scope.getTotalMenuPrice = function() {
    return Dinner.getTotalMenuPrice();
  }
 

  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

});
