var PriceViewController = function(view, model ) {
 
 	$("#plusGuest").click(function(){
 		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 		console.log("click")
 	});
 
 	$("#minusGuest").click(function(){
 		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 	});

 	$("#confirmButton").click(function(){
 		$("#priceView").hide();
 		$("#myDinnerView").show();
 	})
}

