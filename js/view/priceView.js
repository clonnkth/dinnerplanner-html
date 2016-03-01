var PriceView = function (container, model) {

	model.addObserver(this);
	this.numberOfGuests = container.find(".numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.totalMenuPrice = container.find("#totalMenuPrice");
	this.confirmButton = container.find("#confirmButton");
	this.pending = "0.00";


	this.setPending = function(id){
		this.pending = model.getTotalDishPrice(id);
		console.log(this.pending)
		this.update();
	}

	this.clearPending = function (){
		this.pending = "0.00";
		console.log(this.pending)
		this.update();
	}

	this.writeMenu = function () {
		$("#priceMenu").empty(); //Läser inte in korrekt - typ uppdaterar en gång men döljer sedan uppdateringarna
		fullMenu=model.getFullMenu()
		var dishStr = '';
	
			for (var i = 0; i < fullMenu.length; i++) {
				var dish = fullMenu[i];
				var price = (model.getTotalDishPrice(dish.id));
				dishStr = '<tr>'; 
				dishStr += '<td><h4>'+dish.name+'</h4></td> ';
				dishStr += '<td><h4>'+price+'</h4></td>';
				dishStr += '<td><button class="remove" data-id='+dish.id+'>x</button></td></tr>'
				$("#priceMenu").append(dishStr);
		
	}
	var dishStr = '<tr class="line"><td><h4 style="color:red">Pending</h4></td><td></td><td><h4 style="color:red">'+this.pending+'</h4></td></tr>'
		dishStr+='<tr><td/><td/><td class="right"><h4 style="color:red">SEK <span style="color:red">'+model.getTotalMenuPrice()+' </span></h4></td></tr></table>'
	$("#priceMenu").append(dishStr);
		

};


	this.load = function() {
		this.numberOfGuests.html(model.getNumberOfGuests());
		//this.totalMenuPrice.html(model.getTotalMenuPrice());
		this.writeMenu();
	}

	

	this.update = function(object) {
		this.load();
	}

	this.load();
	
}