var StartViewController = function(view, model ) {
 	view.startButton.click(function(){
 		console.log ("I'm in the controller")
 		$("#startView").hide();
 		PriceView.priceView.show();
 	});
}