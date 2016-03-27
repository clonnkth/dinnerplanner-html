// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource,$cookieStore) {
  
 var fullMenu = []


  if(typeof $cookieStore.get('menu') === 'undefined'){
  $cookieStore.put('menu', []);
  };
  
  if(typeof $cookieStore.get('numberOfGuests') === 'undefined'){
  $cookieStore.put('numberOfGuests', 1);
  }
  
  //this.apiKey = 'sV1fPGQKrO0b6oUYb6w9kLI8BORLiWox';
  //this.apiKey = 'F088t4s6QGI5T92W3Nwiju8jFU52J8SP';
  //this.apiKey = '0OV23011kU7B3VVVgxTTTIfdNXeTI3us';
  this.apiKey = '66J8l00npnHHZcCNLRhxkfW1OHxbojy4';


  this.setNumberOfGuests = function(num) {
  	$cookieStore.put('numberOfGuests', num);
  };

  this.getNumberOfGuests = function() {
  	return $cookieStore.get('numberOfGuests');
  };

  /*this.getSelectedDish = function(type) {
    for(var i = 0; i < menu.length ; i++){
      var dish = menu[i];
      if(dish.Category === type) {
        return dish;
      };
    };
  };*/

  this.setFullMenu = function() {
    fullMenu = [];
    if(typeof $cookieStore.get('menu') == 'undefined'){
    $cookieStore.put('menu', []);
    };
    menu = $cookieStore.get('menu');
    for(var i = 0; i < menu.length; i++){
      this.Dish.get({id:menu[i]},function(data){
       fullMenu.push(data);
      });
    };
  };

  this.getFullMenu = function (){
  return fullMenu;
  };

  this.getDishIngredients = function(obj) {
    return obj.Ingredients;
  };

  this.getTotalMenuPrice = function() {
    menu = this.getFullMenu();
    var totalMenuPrice = 0.00;
    for(var i = 0; i < menu.length ; i++){
      dishPrice = this.getTotalDishPrice(menu[i])
      totalMenuPrice = totalMenuPrice+dishPrice;
    };
    return totalMenuPrice;
  };

  this.getTotalDishPrice = function(obj) {
    ingredients = obj.Ingredients;
    var totalDishPrice = 0.00;
    for(var i = 0; i < ingredients.length ; i++){
      totalDishPrice += (ingredients[i].Quantity * $cookieStore.get('numberOfGuests'));
    };
    return totalDishPrice;
  };



  this.addDishToMenu = function(obj) {
    menu = $cookieStore.get('menu');
    var same = true;
    for(var i = 0; i <menu.length ; i++){ 
      if(menu[i] === obj.RecipeID){
        same = false;
        alert("Already in menu!");
        return
      };
    };
    if (same) {
      menu.push(obj.RecipeID);
      $cookieStore.put('menu', menu);
      //fullMenu = [];
      this.setFullMenu();
    };
  };

  //Removes dish from menu
  this.removeDishFromMenu = function(id) {
    menu = $cookieStore.get('menu');
    for(var i = 0; i <menu.length ; i++){ 
      if(menu[i] === id){
        menu.splice(i, 1)
      };
    };
    $cookieStore.remove('menu');
    $cookieStore.put('menu', menu);
    //fullMenu = [];
    this.setFullMenu();

  };


  this.DishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:25,api_key:this.apiKey}, {get:{method:"GET", cache:true}});

  this.Dish = $resource('http://api.bigoven.com/recipe/:id',{api_key:this.apiKey}, {get:{method:"GET", cache:true}}); 



  this.setFullMenu();

  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;



});