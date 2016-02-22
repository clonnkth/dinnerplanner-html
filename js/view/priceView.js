var PriceView = function (container, model) {


	this.numberOfGuests = container.find(".numberOfGuests");
	//this.numberOfGuests = container.find(".numberOfGuests2");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	this.numberOfGuests.html(model.getNumberOfGuests());

	this.totalMenuPrice = container.find("#totalMenuPrice");

	this.totalMenuPrice.html(model.getTotalMenuPrice());

	model.addObserver(this)
}