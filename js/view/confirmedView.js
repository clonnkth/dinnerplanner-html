var ConfirmedView = function (container, model) {
	this.printButton = container.find("#printButton");

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

	model.addObserver(this)
}