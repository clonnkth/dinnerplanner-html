var SelectView = function (container, model) {
	model.addObserver(this);
	this.searchButton = container.find("#searchButton");
	this.filter = "";
	this.types = "";
	this.type = $("#type").val();

	this.loadDishes = function (type, filter) {
		var dishes = model.getAllDishes(type, filter);
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

	this.update = function(object) {
		this.loadDishes();
	}

}