var SelectViewController = function(view, model ) {
 	view.loadDishes("main dish");
 	view.searchButton.click(function(){
 		var filter = document.getElementById(view.filter);
 		console.log(filter.value);
 		var type = document.getElementById(view.type);
 		console.log(type.value);
 		view.loadDishes(type, filter);
 	});

 	view.types.change(function(){
 		var type = document.getElementById(view.type.value);
 		view.loadDishes(type);
 	});
}


