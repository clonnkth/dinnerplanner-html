var SelectView = function (container, model) {
	
	this.searchButton = container.find("#searchButton");
	this.filter = container.find("#filter");
	this.type = container.find("#type");
	this.dishCont = container.find("#dishCont");
	

	this.loadDishes = function (type, filter) {
		console.log("0")
		var dishes = model.getAllDishes(type, filter);
		console.log("5")
		console.log(dishes);
		this.dishCont.html("");
		var dishStr = "";
		for (var i = 0; i < dishes.length; i++) {
			var dish = dishes[i];
			dishStr = '<div class="dishCont"> <div class="imgCont" data-id="'+dish.id+'">'; 
			dishStr += '<img id="img" src="images/'+dish.image+'" alt="'+dish.name+'"></img>';
			dishStr += '<h3 class="dishNames">'+dish.name+'</h3> </div>';
			dishStr += '<div class="description"><h5>'+dish.description+'</h5> </div> </div>';
			this.dishCont.append(dishStr);
		}
		this.imgCont = this.dishCont.find(".imgCont");
	}

	this.loadDishes("Appetizers");
	//this.imgCont = container.find(".imgCont");
}
