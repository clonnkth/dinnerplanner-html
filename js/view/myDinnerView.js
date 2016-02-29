var  MyDinnerView = function (container, model) {
	model.addObserver(this);
	console.log("hello");
	this.numberDinnerOfGuests = container.find("#numberOfGuests");
	console.log(this.numberOfGuests);
	this.backButton2 = container.find("#backButton2");
	//this.numberOfGuests = container.find(".numberOfGuests2");
	
	this.load = function() {
		this.numberOfGuests.html(model.getNumberOfGuests());
	}

	this.update = function(object) {
		this.load();
	}

	this.load();
	
}