// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

  $scope.numberOfGuests = Dinner.getNumberOfGuests();
  $scope.menu = Dinner.getFullMenu();

  $scope.setNumberOfGuest = function(number){
    Dinner.setNumberOfGuests(number);
  }

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }

  $scope.getTotalDishPrice = function(item) {
    return Dinner.getTotalDishPrice(item);
  }

  $scope.removeDishFromMenu = function(id) {
    Dinner.removeDishFromMenu(id);
  }

  $scope.getTotalMenuPrice = function() {
    return Dinner.getTotalMenuPrice();
  }
 

  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

});