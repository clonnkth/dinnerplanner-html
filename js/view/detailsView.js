var DetailsView = function (container, model) {
	model.addObserver(this)

 	this.dish = container.find("#dishInfo");
	this.dishName = container.find(".dishName");	
	this.preparation = container.find("#preparation");
	this.backButton = container.find("#backButton");
	this.confirmButton = container.find("#confirmDish");
	this.totalDishPrice = container.find("#totalPrice");

	//this.current

	/*this.changeCurrent = function(id) {

		this.currentId = id;
		this.load(id);
		return this.currentId;
	}*/

	this.load = function(obj) {
		console.log("herro")
		this.dish.html(obj.RecipeID);
		this.dishName.html(obj.Title);
		this.preparation.html(obj.Instructions);
		//this.totalDishPrice.html(model.getTotalDishPrice(obj));
		loadDish(obj);
 		//loadIngr(obj);
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
		var ingredients = model.getDishIngredients(obj);
		//console.log(ingredients);
		var ingrStr = "";
		var nrGuests =  model.getNumberOfGuests();
		for (var i = 0; i < ingredients.length; i++) {
			var ingredient = ingredients[i];
			ingrStr = '<tr class="ingrRow">'; 
			ingrStr += '<h5><td><span class="qspan">'+ingredient.Quantity * nrGuests+'</span> <span class="uspan">'+ingredient.unit+'</span> </td>'; 
			ingrStr += '<td><span class="nspan">'+ingredient.name+'</span></td>'; 
			ingrStr += '<td><span class="pspan"> SEK '+ingredient.price * nrGuests+'</span></td></h5></tr>'; 
		
			//console.log(ingrStr);

			$("#ingrTable").append(ingrStr);
		}
	}
	

	this.update = function(obj) {
		this.load(obj);
	}
	
}