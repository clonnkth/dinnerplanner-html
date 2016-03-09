var SelectView = function (container, model) {
	
	this.searchButton = container.find("#searchButton");
	this.filter = container.find("#filter");
	this.type = container.find("#type");
	this.dishCont = container.find("#dishCont");
	model.addObserver(this);
	

	this.loadDishes = function (obj) {
	
		var dishes = obj;
		console.log(dishes);
	
		this.dishCont.html("");
		var dishStr = "";
		for (var i = 0; i < dishes.length; i++) {
			var dish = dishes[i];
			dishStr = '<div class="dishCont"> <div class="imgCont" data-id="'+dish.RecipeID+'">'; 
			dishStr += '<img id="img" src="'+dish.ImageURL+'" alt="'+dish.Title+'"></img>';
			dishStr += '<h3 class="dishNames">'+dish.Title+'</h3> </div>';
			dishStr += '<div class="description"><h5>'+dish.Subcategory+'</h5> </div> </div>';
			this.dishCont.append(dishStr);
		}
		this.imgCont = this.dishCont.find(".imgCont");
		$(".loadingCont").hide();
	}
	this.update = function(obj){
		this.loadDishes(obj);

	}
	//this.imgCont = container.find(".imgCont");
	 model.getAllDishes(this, "Appetizers");
	 $(".loadingCont").hide();
}
