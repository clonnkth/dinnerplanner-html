$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"), model);
	//var exampleViewController = new ExampleViewController(exampleView, model);

	var startView = new StartView($(".startView"), model);
	var priceView = new PriceView($("#priceView"), model);
	var selectView = new SelectView($("#selectView"), model);
	var detailsView = new DetailsView($("#detailsView"), model);
	var confirmedView = new ConfirmedView($("#confirmedView"), model);
	var printView = new PrintView($("#printView"), model);
	var myDinnerView = new MyDinnerView($("#myDinnerView"), model);


	var startViewController = new StartViewController(startView, model);
	var priceViewController = new PriceViewController(priceView, confirmedView, printView, model);
	var selectViewController = new SelectViewController(selectView, detailsView, priceView, model);
	var detailsViewController = new DetailsViewController(detailsView, priceView, model);	
	var confirmedViewController = new ConfirmedViewController(confirmedView, model);
	var printViewController = new PrintViewController(printView, model);
	var myDinnerViewController = new MyDinnerViewController(myDinnerView, model);
});