var PriceView = function (container, model) {

	model.addObserver(this);
	//this.numberOfGuests = container.find(".numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	//this.totalMenuPrice = container.find("#totalMenuPrice");
	this.confirmButton = container.find("#confirmButton");

	this.writeMenu = function () {
		$("#priceMenu").empty(); //Läser inte in korrekt - typ uppdaterar en gång men döljer sedan uppdateringarna
		fullMenu=model.getFullMenu()
		var dishStr = '<table><tr><td><h3>My Dinner</h3></td></tr>';
			dishStr+= '<tr><td><h4>People</h4></td><td><h4>'+model.getNumberOfGuests()+'</h4></td>';
			dishStr+= '<td class="right"><div class="btnCont"><button id="plusGuest" class="btn">+</button><button id="minusGuest" class="btn">-</button></div></td></tr>';
			$("#priceMenu").append(dishStr);
			for (var i = 0; i < fullMenu.length; i++) {
				var dish = fullMenu[i];
				var price = (model.getTotalDishPrice(dish.id));
				dishStr = '<tr id="'+dish.id+'">'; 
				dishStr += '<td><h4>'+dish.name+'</h4></td> ';
				dishStr += '<td><h4 >'+price+'</h4></td></tr>';
				$("#priceMenu").append(dishStr);
		
	}
	var dishStr = '<div><td><h4 style="color:red">Pending</h4></td><td/><td class="right"><h4 style="color:red">0.00</h4></td></div></tr>'
		dishStr+='<tr><td/><td/><td class="right"><h4 style="color:red">SEK <span style="color:red">'+model.getTotalMenuPrice()+' </span></h4></td></tr></table>'
		dishStr+= '<div id="confirm_align"><button id="confirmButton">Confirm Dinner</button></div>'	
	$("#priceMenu").append(dishStr);
		

};


	this.load = function() {
		//this.numberOfGuests.html(model.getNumberOfGuests());
		//this.totalMenuPrice.html(model.getTotalMenuPrice());
		this.writeMenu();
	}

	

	this.update = function(object) {
		this.load();
	}

	this.load();
	
}