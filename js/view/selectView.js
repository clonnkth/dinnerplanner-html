var SelectView = function (container, model) {
	
	this.searchButton = container.find("#searchButton");
	this.filter = container.find("#filter");
	this.type = container.find("#type");
	

	this.loadDishes = function (type, filter) {
		var dishes = model.getAllDishes(type, filter);
		$("#dishCont").empty();
		var dishStr = "";
		for (var i = 0; i < dishes.length; i++) {
			var dish = dishes[i];
			dishStr = '<div class="dishCont"> <div class="imgCont" data-id="'+dish.id+'">'; 
			dishStr += '<img id="img" src="images/'+dish.image+'" alt="'+dish.name+'"></img>';
			dishStr += '<h3 class="dishNames">'+dish.name+'</h3> </div>';
			dishStr += '<div class="description"><h5>'+dish.description+'</h5> </div> </div>';

			$("#dishCont").append(dishStr);
		}
	}

	this.loadDishes("main dish");
	this.imgCont = container.find(".imgCont");
}