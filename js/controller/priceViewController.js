var PriceViewController = function(view, view2, view3, model ) {
 
 	$("#plusGuest").click(function(){
 		model.setNumberOfGuests(model.getNumberOfGuests() + 1, view);
 	});
 
 	$("#minusGuest").click(function(){
 		model.setNumberOfGuests(model.getNumberOfGuests() - 1l view);
 	});

 	$("#confirmButton").click(function(){
 		$("#priceView").hide();
 		$("#myDinnerView").show();
		$("#printView").hide();
		view2.update()
		view3.update()
		$("#confirmedView").show();

 	})
 	view.priceMenu.on("click", ".remove", function(){
 		model.removeDishFromMenu($(this).data("id", view))
 		
 	})
}

