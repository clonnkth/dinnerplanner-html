//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	this.numberOfGuests.html(model.getNumberOfGuests());

	this.totalMenuPrice = container.find("#totalMenuPrice");

	this.totalMenuPrice.html(model.getTotalMenuPrice());

	this.totalDishPrice = container.find("#totalDishPrice");

	this.totalDishPrice.html(model.getTotalDishPrice(100));

	this.dish = container.find("#dishInfo");

	this.dish.html(model.getDish(100));

	var loadDishes = function (type) {
		var dishes = model.getAllDishes(type);
		var dishStr = "";
		for (var i = 0; i < dishes.length; i++) {
			var dish = dishes[i];
			dishStr = '<div class="dishCont" data-id="'+dish.id+'">'; 
			dishStr += '<div class="imgCont"> <img id="img" src="images/'+dish.image+'" alt="'+dish.name+'"></img>';
			dishStr += '<h3 class="dishName">'+dish.name+'</h3> </div>';
			dishStr += '<div class="description"><h5>'+dish.description+'</h5> </div> </div>';

			$("#dishCont").append(dishStr);
		}
	}
	loadDishes('main dish');

	var loadDish = function (id) {
		var dish = model.getDish(id);
		var dishStr = "";
		for (var i = 0; i < dish.length; i++) {
			var dish = dish[i];
			dishStr = '<div class="dishCont2" data-id="'+dish.id+'">'; 
			dishStr += '<div class="imgCont2"> <img id="img2" src="images/'+dish.image+'" alt="'+dish.name+'"></img>';
			dishStr += '<h3 class="dishName2">'+dish.name+'</h3> </div>';
			dishStr += '<div class="description2"><h5>'+dish.description+'</h5> </div> </div>';

			$("#dishCont2").append(dishStr);
		}
	}
	loadDish(100);

//Gör en tabell med allt som finns i ingredients. När tabellen görs ska price och amount multipliceras med antal gäster. Använd getNumberOfGuests.
	var loadDish = function (id) {
		var dish = model.getDishIngredients(id);
		var dishStr = "";
		for (var i = 0; i < dish.length; i++) {
			var dish = dish[i];
			dishStr = '<div class="ingrCont" data-id="'+dish.id+'">'; 
		


			$("#dishCont2").append(dishStr);
		}
	}
	loadDish(100);

	

}


 
