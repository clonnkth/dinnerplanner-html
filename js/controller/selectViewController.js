var SelectViewController = function(view, view2, model ) {
 	/*
 	view.type.change(function(){
 		view.loadDishes(this.value);
 	});
	*/

 	view.searchButton.click(function() {
 		view.loadDishes(type.value, filter.value);
 	});

 	view.imgCont.click(function() {
 		$("#selectView").hide();
 		$("#detailsView").show();
 		view2.changeCurrent(this.id)
 		console.log(this.id)

 	});
}


