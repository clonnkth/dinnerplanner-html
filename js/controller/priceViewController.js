var PriceViewController = function(view, view2, view3, view4, view5, model ) {
 
 	$("#plusGuest").click(function(){
 		model.setNumberOfGuests(view, model.getNumberOfGuests() + 1);
 		view4.load();

 	});
 
 	$("#minusGuest").click(function(){
 		model.setNumberOfGuests(view, model.getNumberOfGuests() - 1 );
 		view4.load();
 	});

 	$("#confirmButton").click(function(){
 		$("#priceView").hide();
 		$("#myDinnerView").show();
		$("#printView").hide();
		view2.update()
		view3.update()
		view5.update()

		$("#confirmedView").show();



 	})
 	view.priceMenu.on("click", ".remove", function(){
 		model.removeDishFromMenu(view, $(this).data("id"))
 		
 	})
}

