var SelectViewController = function(view, view2, view3, model ) {
 	/*
 	view.type.change(function(){
 		view.loadDishes(this.value);
 	});
	*/

 	view.searchButton.click(function() {
 		//console.log(filter.value);
		$(".loadingCont").show();
 		model.getAllDishes(view, type.value, filter.value );
 		//$(".loadingCont").hide();
 	});

 	//$(document).on('click', '.imgCont', )
 	view.dishCont.on("click", '.imgCont', function() {
		//console.log("Happening");
 		$("#selectView").hide();
 		$("#loadingCont").show();
 		$("#detailsView").show();
 		$(".loadingCont").show();
 		model.getDish(view2, $(this).data("id"));

 		//view2.changeCurrent($(this).data("id"));
 		console.log($(this).data("id"))
 		//console.log(model.dish)
 		//view3.setPending();

 	});
}


