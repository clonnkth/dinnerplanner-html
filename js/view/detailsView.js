var DetailsView = function (container, view, model) {
	model.addObserver(this)

 	this.dish = container.find("#dishInfo");
	this.dishName = container.find(".dishName");	
	this.preparation = container.find("#preparation");
	this.backButton = container.find("#backButton");
	this.confirmButton = container.find("#confirmDish");
	this.totalDishPrice = container.find("#totalPrice");
	this.obj = null
	this.price =null

	//this.current

	/*this.changeCurrent = function(id) {

		this.currentId = id;
		this.load(id);
		return this.currentId;
	}*/

	this.load = function() {
		//console.log(obj)
		//view3.setPending(obj);
		this.price = model.getTotalDishPrice(this.obj);
		this.dish.html(this.obj.RecipeID);
		this.dishName.html(this.obj.Title);
		this.preparation.html(this.obj.Instructions);
		this.totalDishPrice.html(this.price)
		view.setPending(this.price);

		//console.log(obj)
		loadDish(this.obj);
 		loadIngr(this.obj);
 		$(".loadingCont").hide();

 		
	};


	var loadDish = function (obj) {
		$("#dishCont2").empty();
		var dish = obj;
		var dishStr = "";
		dishStr = '<div class="dishCont2" data-id="'+dish.RecipeID+'">'; 
		dishStr += '<h3 class="dishName2">'+dish.Title+'</h3> </div>';
		dishStr += '<div class="imgCont2"> <img id="img2" src="'+dish.ImageURL+'" alt="'+dish.Title+'"></img>';
		dishStr += '<div class="description2"><h5>'+dish.Description+'</h5> </div> </div>';

		$("#dishCont2").append(dishStr);
	};

	
//Gör en tabell med allt som finns i ingredients. När tabellen görs ska price och amount multipliceras med antal gäster. Använd getNumberOfGuests.
	var loadIngr = function (obj) {
		$("#ingrTable").empty();
		var ingredients = obj.Ingredients;
		var ingrStr = "";
		var nrGuests =  model.getNumberOfGuests();
		for (var i = 0; i < ingredients.length; i++) {
			var ingredient = ingredients[i];
			ingredientPrice = ingredient.Quantity * nrGuests;
			ingrStr = '<tr class="ingrRow">'; 
			ingrStr += '<h5><td><span class="qspan">'+ingredient.Quantity * nrGuests+'</span> <span class="uspan">'+ingredient.Unit+'</span> </td>'; 
			ingrStr += '<td><span class="nspan">'+ingredient.Name+'</span></td>'; 
			ingrStr += '<td><span class="pspan"> SEK '+ingredientPrice+'</span></td></h5></tr>'; 
		
			//console.log(ingrStr);

			$("#ingrTable").append(ingrStr);
		}
	}
	

	this.update = function(obj) {
		this.obj = obj;
		this.load();
	}

}