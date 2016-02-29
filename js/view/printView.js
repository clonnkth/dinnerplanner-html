var PrintView = function (container, model) {
model.addObserver(this)
	this.numberOfGuests = container.find(".numberOfGuests");
	this.numberOfGuests.html(model.getNumberOfGuests());

	this.printMenu = function () {
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
	
	this.update = function(object) {
		this.printMenu();
	}

	this.printMenu()
}