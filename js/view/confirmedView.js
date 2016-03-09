var ConfirmedView = function (container, model) {
	this.printButton = container.find("#printButton");
	model.addObserver(this);
	
	this.loadMenu = function () {
		var dishes = model.getFullMenu();
		var dishStr = "";
		$("#fullMenu").html("");
		for (var i = 0; i < dishes.length; i++) {
			var dish = dishes[i];
			dishStr = '<div class="dishCont" data-id="'+dish.RecipeID+'">'; 
			dishStr += '<div class="imgCont"> <img id="img" src="'+dish.ImageURL+'" alt="'+dish.Title+'"></img>';
			dishStr += '<h3 class="dishNames">'+dish.Title+'</h3> </div>';
			dishStr += '<div class="price"><h5 style="color:red">'+model.getTotalDishPrice(dish)+' SEK </h5> </div> </div>';


			$("#fullMenu").append(dishStr);
		}
		$("#fullMenu").append('<h3 id="totalMenuPrice2">Total: <span></span> '+model.getTotalMenuPrice()+' SEK</h3>');
	};
	
	this.update = function(object) {
		this.loadMenu();
	};
	
}
