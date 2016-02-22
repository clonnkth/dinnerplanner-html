var StartView = function (container, model) {
	this.startButton = container.find("#startbutton");
	model.addObserver(this)
}