var PriceView = function (container, model) {

	model.addObserver(this);
	this.numberOfGuests = container.find(".numberOfGuests");
	//this.numberOfGuests = container.find(".numberOfGuests2");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.totalMenuPrice = container.find("#totalMenuPrice");
	this.confirmButton = container.find("#confirmButton");
	

	this.load = function() {
		this.numberOfGuests.html(model.getNumberOfGuests());
		this.totalMenuPrice.html(model.getTotalMenuPrice());
	}

	

	this.update = function(object) {
		this.load();
	}

	this.load();
	
}