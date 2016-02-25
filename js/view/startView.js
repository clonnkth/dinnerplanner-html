var StartView = function (container, model) {
	this.startButton = container.find("#startButton");
	model.addObserver(this)

	this.update = function(object) { 
	};
}