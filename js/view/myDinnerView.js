var  MyDinnerView = function (container, model) {
	model.addObserver(this);
	this.numberOfGuests = container.find("#numberOfGuests2");
	this.backButton2 = container.find("#backButton2");
	//this.numberOfGuests = container.find(".numberOfGuests2");
	
	this.update = function() {
		this.numberOfGuests.html(model.getNumberOfGuests());
	}

	/*this.update = function(object) {
		this.load();
	}

	this.load();*/
	
}