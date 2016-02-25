var PriceViewController = function(view, model ) {
 
 	view.plusButton.click(function(){
 	model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 	console.log("+1")
 	});
 
 	view.minusButton.click(function(){
 	model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 	console.log("-1")
 	});
}

