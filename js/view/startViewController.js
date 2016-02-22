var startViewController = function(view, model ) {
 	view.startButton.click(function(){
 		console.log ("I'm in the controller")
 		view.startView.hide();
 		PriceView.priceView.show();
 	});
}