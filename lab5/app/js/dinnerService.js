// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource,$cookieStore) {
  
 /* var numberOfGuest = $cookieStore.get('numberOfGuests');
  if(typeof numberOfGuests == 'undefined'){
    numberOfGuests=1;



    $cookieStore['numberOfGuests'];
    console.log(numberOfGuests);
  };*/

  //var menu = $cookieStore.get('menu');
  if(typeof $cookieStore.get('menu') === 'undefined'){
  $cookieStore.put('menu', []);
  };

  //var numberOfGuests = $cookieStore.get('numberOfGuests');
  if(typeof $cookieStore.get('numberOfGuests') === 'undefined'){
  $cookieStore.put('numberOfGuests', 1);
  }

  /*this.dishes = null;
  this.dish = null;*/
  
  
  //this.apiKey = 'sV1fPGQKrO0b6oUYb6w9kLI8BORLiWox';
  //this.apiKey = 'F088t4s6QGI5T92W3Nwiju8jFU52J8SP';
  //this.apiKey = '0OV23011kU7B3VVVgxTTTIfdNXeTI3us';
  this.apiKey = '66J8l00npnHHZcCNLRhxkfW1OHxbojy4';


  this.setNumberOfGuests = function(num) {
  	$cookieStore.put('numberOfGuests', num);

    //numberOfGuest = num;
  };

  this.getNumberOfGuests = function() {
  	return $cookieStore.get('numberOfGuests');

    //return numberOfGuest;
  };



  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes) 
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details
  this.getSelectedDish = function(type) {
    //TODO Lab 2
    for(var i = 0; i < menu.length ; i++){
      var dish = menu[i];
      if(dish.Category === type) {
        return dish;
      }
    }
  }

var fullMenu = [];
  //Returns all the dishes on the menu.
  this.setFullMenu = function() {
    menu = $cookieStore.get('menu');
    //console.log(menu)
    for(var i = 0; i < menu.length; i++){
      this.Dish.get({id:menu[i]},function(data){
       fullMenu.push(data);
      });
      //fullMenu.push(this.getDish(menu[i])); 
    };
    console.log(fullMenu)
  };

  /*this.getDish = function(itemID) {
    this.Dish.get({id:itemID},function(data){
       return data;
     });
  };*/

this.getFullMenu = function (){
return fullMenu
}

  //Returns all ingredients for all the dishes on the menu.
 /* this.getAllIngredients = function() {
    //TODO Lab 2
    var allIngredients = []
    //menu = this.getFullMenu();
    //console.log(menu)

    //var fullMenu = this.getFullMenu();
    for(var i = 0; i < fullMenu.length; i++) {
      var ingredients = fullMenu[i].Ingredients
      for(var j = 0; j < ingredients.length; j++) {
        allIngredients.push(ingredients[j]);
      }
    }
    return allIngredients;
  }*/

  this.getDishIngredients = function(obj) {
    //TODO Lab 2
    //var dish = this.getDish(id);
    //var ingredients = this.dish.Ingredients;
    return obj.Ingredients;
  }

  this.getTotalMenuPrice = function() {
    //TODO Lab 
    menu = this.getFullMenu();
    var totalMenuPrice = 0;
    for(var i = 0; i < menu.length ; i++){
      dishPrice = this.getTotalDishPrice(menu[i])
      totalMenuPrice = totalMenuPrice+dishPrice;
    
   // allIngredients = this.getAllIngredients();
      console.log(dishPrice)
}
  //  for(var i = 0; i < allIngredients.length ; i++){
      //for (menu[i].ingredients)
      //totalMenuPrice +=  (allIngredients[i].Quantity * $cookieStore.get('numberOfGuests'));
    //}
    return totalMenuPrice;
  };

  //Returns the total price of the menu (all the ingredients multiplied by number of guests).
 /* this.getTotalMenuPrice = function() {
    //TODO Lab 2
    allIngredients = this.getAllIngredients();
    var totalMenuPrice = 0.00;
    for(var i = 0; i < allIngredients.length ; i++){
      //for (menu[i].ingredients)
      totalMenuPrice +=  (allIngredients[i].Quantity * $cookieStore.get('numberOfGuests'));
    }
    return totalMenuPrice;
  }*/

  this.getTotalDishPrice = function(obj) {
    ingredients = obj.Ingredients;
    var totalDishPrice = 0.00;
    for(var i = 0; i < ingredients.length ; i++){
      totalDishPrice += (ingredients[i].Quantity * $cookieStore.get('numberOfGuests'));
    }
    return totalDishPrice;
  }


  //this.addDishToMenu = function(obj) {
  this.addDishToMenu = function(obj) {
    //console.log("Category ",this.getDish().Category);
    menu = $cookieStore.get('menu');
    var same = true;
    for(var i = 0; i <menu.length ; i++){ 
     // console.log(menu[i])
      //console.log(obj.RecipeID)
      if(menu[i] === obj.RecipeID){
        same = false
        //console.log("Not added")
        return
      };
    };
    if (same) {
      menu.push(obj.RecipeID)
     // console.log("added")
      //$cookieStore.remove('menu');
      $cookieStore.put('menu', menu);
      fullMenu = [];
      this.setFullMenu();

    };

  };

  //Removes dish from menu
  this.removeDishFromMenu = function(id) {
  	/*$cookieStore.remove(id)*/
    menu = $cookieStore.get('menu');
    for(var i = 0; i <menu.length ; i++){ 
      if(menu[i] === id){
        menu.splice(i, 1)
        }
    }
    $cookieStore.remove('menu');
    $cookieStore.put('menu', menu);
    fullMenu = [];
    this.setFullMenu();

  };

  //function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
  //you can use the filter argument to filter out the dish by name or ingredient (use for search)
  //if you don't pass any filter all the dishes will be returned
  this.DishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:25,api_key:this.apiKey});

  this.Dish = $resource('http://api.bigoven.com/recipe/:id',{api_key:this.apiKey}); 


/*
  if(typeof $cookies["guests"] === 'undefined'){
    $cookies["guests"] = 1
  }

  
  if(typeof $cookies["Appetizers"] === 'undefined'){
    $cookies["Appetizers"] = null
  } else {
    this.loadDishToMenu($cookies["Appetizers"])
  }

  if(typeof $cookies["Main Dish"] === 'undefined'){
    $cookies["Main Dish"] = null
  } else {
    this.loadDishToMenu($cookies["Main Dish"])

  }

  if(typeof $cookies["Desserts"] === 'undefined'){
    $cookies["Desserts"] = null
  } else {
    this.loadDishToMenu($cookies["Desserts"])
  }*/

  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});