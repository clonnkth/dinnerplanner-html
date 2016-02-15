//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	this.numberOfGuests.html(model.getNumberOfGuests());

	this.TotalMenuPrice = container.find("#TotalMenuPrice");

	this.TotalMenuPrice.html(model.getTotalMenuPrice());

	this.TotalDishPrice = container.find("#TotalDishPrice");

	this.TotalDishPrice.html(model.getTotalDishPrice(100));

	var loadDishes = function (type) {
		var dishes = model.getAllDishes(type);
		var dishStr = "";
		for (var i = 0; i < dishes.length; i++) {
			var dish = dishes[i];
			dishStr = '<div class="dishCont" data-id="'+dish.id+'">'; 
			dishStr += '<div class="turtle"> <img src="images/'+dish.image+'" alt="'+dish.name+'"></img>';
			dishStr += '<h3 class="dishName">'+dish.name+'</h3> </div>';
			dishStr += '<div class="description"><h5>'+dish.description+'</h5> </div> </div>';

			$("#dishCont").append(dishStr);
		}
	}
	loadDishes('main dish');
}


 
