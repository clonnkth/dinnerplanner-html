var DetailsViewController = function(view, view2, model) {
	view.backButton.click(function() {
 		$("#detailsView").hide();
 		$("#selectView").show();
 		view2.clearPending();


 	});

	view.confirmButton.click(function() {
 		$("#detailsView").hide();
 		$("#selectView").show();
 		view2.clearPending();
 		model.addDishToMenu(view.currentId);

 	});



 	};