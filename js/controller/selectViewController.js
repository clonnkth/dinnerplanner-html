var SelectViewController = function(view, view2, view3, model ) {
 	/*
 	view.type.change(function(){
 		view.loadDishes(this.value);
 	});
	*/

 	view.searchButton.click(function() {
 		console.log(filter.value);
 		model.getAllDishes(type.value, filter.value);
 	});

 	//$(document).on('click', '.imgCont', )
 	view.dishCont.on("click", '.imgCont', function() {
		//console.log("Happening");
 		$("#selectView").hide();
 		$("#detailsView").show();
 		model.getDish($(this).data("id"));

 		//view2.changeCurrent($(this).data("id"));
 		console.log($(this).data("id"))
 		//console.log(model.dish)
 		//view3.setPending(model.dish);

 	});
}


