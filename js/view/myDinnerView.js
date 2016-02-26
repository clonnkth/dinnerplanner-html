var  MyDinnerView = function (container, model) {
	model.addObserver(this);
	this.numberOfGuests = container.find(".numberOfGuests");
	console.log(this.numberOfGuests);
	//this.numberOfGuests = container.find(".numberOfGuests2");
	
	this.load = function() {
		this.numberOfGuests.html(model.getNumberOfGuests());
	}

	this.update = function(object) {
		this.load();
	}

	this.load();
	
}