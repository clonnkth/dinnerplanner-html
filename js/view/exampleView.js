//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find(".numberOfGuests");
	//this.numberOfGuests = container.find(".numberOfGuests2");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	this.numberOfGuests.html(model.getNumberOfGuests());

	this.totalMenuPrice = container.find("#totalMenuPrice");

	this.totalMenuPrice.html(model.getTotalMenuPrice());

	this.totalDishPrice = container.find(".totalDishPrice");

	this.totalDishPrice.html(model.getTotalDishPrice(100));

	this.dish = container.find("#dishInfo");

	this.dish.html(model.getDish(100));

	this.dishName = container.find(".dishName");

	this.dishName.html(model.getDish(100).name);

	this.preparation = container.find("#preparation");

	this.preparation.html(model.getDish(100).description);

	var loadDishes = function (type) {
		var dishes = model.getAllDishes(type);
		var dishStr = "";
		for (var i = 0; i < dishes.length; i++) {
			var dish = dishes[i];
			dishStr = '<div class="dishCont" data-id="'+dish.id+'">'; 
			dishStr += '<div class="imgCont"> <img id="img" src="images/'+dish.image+'" alt="'+dish.name+'"></img>';
			dishStr += '<h3 class="dishNames">'+dish.name+'</h3> </div>';
			dishStr += '<div class="description"><h5>'+dish.description+'</h5> </div> </div>';

			$("#dishCont").append(dishStr);
		}
	}
	loadDishes('starter');

	var loadDish = function (id) {
		var dish = model.getDish(id);
		var dishStr = "";
		dishStr = '<div class="dishCont2" data-id="'+dish.id+'">'; 
		dishStr += '<h3 class="dishName2">'+dish.name+'</h3> </div>';
		dishStr += '<div class="imgCont2"> <img id="img2" src="images/'+dish.image+'" alt="'+dish.name+'"></img>';
		dishStr += '<div class="description2"><h5>'+dish.description+'</h5> </div> </div>';

		$("#dishCont2").append(dishStr);
	}

	loadDish(100);

//Gör en tabell med allt som finns i ingredients. När tabellen görs ska price och amount multipliceras med antal gäster. Använd getNumberOfGuests.
	var loadIngr = function (id) {
		var ingredients = model.getDishIngredients(id);
		//console.log(ingredients);
		var ingrStr = "";
		var nrGuests =  model.getNumberOfGuests();
		for (var i = 0; i < ingredients.length; i++) {
			var ingredient = ingredients[i];
			ingrStr = '<tr class="ingrRow">'; 
			ingrStr += '<h5><td><span class="qspan">'+ingredient.quantity * nrGuests+'</span> <span class="uspan">'+ingredient.unit+'</span> </td>'; 
			ingrStr += '<td><span class="nspan">'+ingredient.name+'</span></td>'; 
			ingrStr += '<td><span class="pspan"> SEK '+ingredient.price * nrGuests+'</span></td></h5></tr>'; 
		
			//console.log(ingrStr);

			$("#ingrTable").append(ingrStr);
		}
	$("#ingrTable").append(	'<tr><td><button id="confirmDish">Confirm Dish</button></td><td/><td><h4>SEK '+model.getTotalDishPrice(id)+'</h4></td></tr>')
	}
	loadIngr(100);

	var loadMenu = function () {
		var dishes = model.getFullMenu();
		var dishStr = "";
		for (var i = 0; i < dishes.length; i++) {
			var dish = dishes[i];
			dishStr = '<div class="dishCont" data-id="'+dish.id+'">'; 
			dishStr += '<div class="imgCont"> <img id="img" src="images/'+dish.image+'" alt="'+dish.name+'"></img>';
			dishStr += '<h3 class="dishNames">'+dish.name+'</h3> </div>';
			dishStr += '<div class="price"><h5 style="color:red">'+model.getTotalDishPrice(dish.id)+' SEK </h5> </div> </div>';


			$("#fullMenu").append(dishStr);
		}
		$("#fullMenu").append('<h3 id="totalMenuPrice2">Total: <span></span> '+model.getTotalMenuPrice()+' SEK</h3>');
	}
	loadMenu();

	var printMenu = function () {
		var dishes = model.getFullMenu();
		var dishStr = "";
		for (var i = 0; i < dishes.length; i++) {
			var dish = dishes[i];
			dishStr = '<div class="printMenu" data-id="'+dish.id+'">'; 
			dishStr += '<img class="img" src="images/'+dish.image+'" alt="'+dish.name+'"></img>';
			dishStr += '<div class="description2"><h2 class="dishNames2">'+dish.name+'</h2> ';
			dishStr += '<h3 >'+dish.description+'</h3></div>';
			dishStr += '<div class="description2"><h3 class="dishNames2">Preperation</h3><h3>'+dish.description+'</h3></div></div>';


			$("#printMenu").append(dishStr);
		}
	}
	printMenu()
}


 
