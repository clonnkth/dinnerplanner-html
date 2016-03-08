var PrintView = function (container, model) {
	model.addObserver(this)
	this.numberOfGuests = container.find(".numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());

	this.printMenu = function () {
			var dishes = model.getFullMenu();
			var dishStr = "";
			$("#printMenu").html("");
			for (var i = 0; i < dishes.length; i++) {
				var dish = dishes[i];
				dishStr = '<div class="printMenu" data-id="'+dish.RecipeID+'">'; 
				dishStr += '<img class="img" src="images/'+dish.ImageURL+'" alt="'+dish.Title+'"></img>';
				dishStr += '<div class="description2"><h2 class="dishNames2">'+dish.Title+'</h2> ';
				dishStr += '<h3 >'+dish.Subcategory+'</h3></div>';
				dishStr += '<div class="description2"><h3 class="dishNames2">Preperation</h3><h3>'+dish.Subcategory+'</h3></div></div>';


				$("#printMenu").append(dishStr);
		}
	}
	
	this.update = function(object) {
		this.printMenu();
	}

	this.printMenu()
}
