$(document).ready(function() {

	var buttonClicks = 0;
	$("button").on("click", function() {
		buttonClicks++;
		var lineToDisplay = $("<div>" + " " + "<span id='lineText'>" + "Line #" + "</span>" + " " + buttonClicks + " " + "<button class='remove-button'>Remove</button> <button class='change-color-button'>Chage Color</button></div>");
		$("#clickButton").append(lineToDisplay);

	$(".remove-button").on("click",function(){
			$(this).parent().remove();
	});

	$(".change-color-button").on("click",function(){
		$(this).parent().css("background-color", "red");
	});

	});

});
