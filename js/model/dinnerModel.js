//DinnerModel Object constructor
var DinnerModel = function() {
 
	//TODO Lab 2 implement the data structure that will hold number of guest
	// and selected dinner options for dinner menu
	var nrGuests = 0;
	var menu = [];
	var observers = [];
	this.dishes = null
	
	this.apiKey = 'r02x0R09O76JMCMc4nuM0PJXawUHpBUL';


	this.notifyObservers = function(obj) {
		/*if(obj.statusText === "error") {
			console.log("error")
		}else{*/
			for (var i = 0; i < observers.length; i++) {
				observers[i].update(obj);
			}
		//}
	}

	this.addObserver = function(observer) {
		observers.push(observer);
	}


	this.setNumberOfGuests = function(num) {
		//TODO Lab 2
		nrGuests = num;
		this.notifyObservers();
	}

	// should return 
	this.getNumberOfGuests = function() {
		return nrGuests;
		
	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		//TODO Lab 2
		for(var i = 0; i < menu.length ; i++){
			var dish = this.getDish(menu[i]);
			if(dish.type === type) {
				return dish;
			}
		}
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		//TODO Lab 2
		var fullMenu = [];
		for(var i = 0; i < menu.length; i++){
			fullMenu.push(this.getDish(menu[i]));		
		}
		return fullMenu;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		//TODO Lab 2
		var allIngredients = []
		var fullMenu = this.getFullMenu();
		for(var i = 0; i < fullMenu.length; i++) {
			var ingredients = fullMenu[i].ingredients
			for(var j = 0; j < ingredients.length; j++) {
				allIngredients.push(ingredients[j]);
			}
		}
		return allIngredients;
	}

	this.getDishIngredients = function(id) {
		//TODO Lab 2
		var dish = this.getDish(id);
		var ingredients = dish.ingredients;
		return ingredients;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		//TODO Lab 2
		allIngredients = this.getAllIngredients();
		var totalMenuPrice = 0;
		for(var i = 0; i < allIngredients.length ; i++){
			//for (menu[i].ingredients)
			totalMenuPrice +=  (allIngredients[i].price * nrGuests);
		}
		return totalMenuPrice;
	}

	this.getTotalDishPrice = function(id) {
		//TODO Lab 2
		ingredients = this.getDish(id).ingredients;
		var totalDishPrice = 0.00;
		for(var i = 0; i < ingredients.length ; i++){
			//for (menu[i].ingredients)
			totalDishPrice = totalDishPrice + (ingredients[i].price * nrGuests);
		}
		return totalDishPrice;
	}


	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		//TODO Lab 2 
		var url = "http://api.bigoven.com/recipe/"+id+"?api_key="+this.apiKey;

		$.ajax({
			type: 'GET',
			dataType: 'json',
			cache: false,
			url: url,
			success: function(data) {
				this.fullMenu.push(data);
				//_this.notifyObservers();
				}
			});
	};

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		//TODO Lab 2
		var index = menu.indexOf(id)
		if(index > -1) {
			menu.splice(index, 1);
		}
		this.notifyObservers();
	};



	

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.setAllDishes = function (type, filter) {
		console.log("here")
	  var apiKey = this.apiKey;
      var _this = this
        var url;
        if(type){ 
        	//url = "http://api.bigoven.com/recipes?api_key="+apiKey+"pg=1&rpp=25&any_kw="+categoryKeyword";
        	url = 'http://api.bigoven.com/recipes?api_key='+this.apiKey+'&any_kw='+type+'&pg=1&rpp=10';
        	console.log("2")
        	}
      
        	
        else {
        	url = 'http://api.bigoven.com/recipes?api_key='+this.apiKey+'&title_kw='+filter+'&any_kw='+type+'&pg=1&rpp=10';
        }
                  
        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
            success: function(data){
            	this.dishes=data.Results;
            	console.log(this.dishes);
            	_this.notifyObservers(data.Results);


            },
            
            error: function (a) {
            	_this.notifyObservers(a);
            	console.log("Error");
            }
        }).done (function () {
            	alert("Done!");
            
         });
    };

  

   this.getAllDishes = function(){
   	return this.dishes
   };

	//function that returns a dish of specific ID
	this.getDish = function (id) {
		var apiKey = this.apiKey;
		var recipeID = id;
		var url = "http://api.bigoven.com/recipe/"+id+"?api_key="+apiKey;
		$.ajax({
        	type: "GET",
        	dataType: 'json',
        	cache: false,
        	url: url,
        	success: function (data) {
            	//this.notifyObservers(data);
            	console.log(data.Results);
            }
         });
	};
    
        


	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	/*var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meatballs',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];*/

}
