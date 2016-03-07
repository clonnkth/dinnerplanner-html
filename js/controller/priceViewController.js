var PriceViewController = function(view, view2, view3, model ) {
 
 	$("#plusGuest").click(function(){
 		model.setNumberOfGuests(view, model.getNumberOfGuests() + 1);
 	});
 
 	$("#minusGuest").click(function(){
 		model.setNumberOfGuests(view, model.getNumberOfGuests() - 1 );
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

