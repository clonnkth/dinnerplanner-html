var  MyDinnerView = function (container, model) {
	model.addObserver(this);
	this.numberOfDinnerGuests = container.find("#numberOfDinnerGuests");
	this.backButton2 = container.find("#backButton2");
	//this.numberOfGuests = container.find(".numberOfGuests2");
	
	this.load = function() {
		this.numberOfDinnerGuests.html(model.getNumberOfGuests());
	}

	this.update = function(object) {
		this.load();
	}

	this.load();
	
}