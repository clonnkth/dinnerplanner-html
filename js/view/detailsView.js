var DetailsView = function (container, model) {


 this.dish = container.find("#dishInfo");

	this.dish.html(model.getDish(100));

	this.dishName = container.find(".dishName");

	this.dishName.html(model.getDish(100).name);

	this.preparation = container.find("#preparation");

	this.preparation.html(model.getDish(100).description);
	var loadDish = function (id) {
		var dish = model.getDish(id);
		var dishStr = "";
		dishStr = '<div class="dishCont2" data-id="'+dish.id+'">'; 
		dishStr += '<h3 class="dishName2">'+dish.name+'</h3> </div>';
		dishStr += '<div class="imgCont2"> <img id="img2" src="images/'+dish.image+'" alt="'+dish.name+'"></img>';
		dishStr += '<div class="description2"><h5>'+dish.description+'</h5> </div> </div>';

		$("#dishCont2").append(dishStr);
	}

	loadDish(100);

//Gör en tabell med allt som finns i ingredients. När tabellen görs ska price och amount multipliceras med antal gäster. Använd getNumberOfGuests.
	var loadIngr = function (id) {
		var ingredients = model.getDishIngredients(id);
		//console.log(ingredients);
		var ingrStr = "";
		var nrGuests =  model.getNumberOfGuests();
		for (var i = 0; i < ingredients.length; i++) {
			var ingredient = ingredients[i];
			ingrStr = '<tr class="ingrRow">'; 
			ingrStr += '<h5><td><span class="qspan">'+ingredient.quantity * nrGuests+'</span> <span class="uspan">'+ingredient.unit+'</span> </td>'; 
			ingrStr += '<td><span class="nspan">'+ingredient.name+'</span></td>'; 
			ingrStr += '<td><span class="pspan"> SEK '+ingredient.price * nrGuests+'</span></td></h5></tr>'; 
		
			//console.log(ingrStr);

			$("#ingrTable").append(ingrStr);
		}
	$("#ingrTable").append(	'<tr><td><button id="confirmDish">Confirm Dish</button></td><td/><td><h4>SEK '+model.getTotalDishPrice(id)+'</h4></td></tr>')
	}
	loadIngr(100);

	model.addObserver(this)
}