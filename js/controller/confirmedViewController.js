var ConfirmedViewController = function(view, model) {
	view.printButton.click(function() {
 		$("#confirmedView").hide();
 		$("#printView").show();
 	});
};