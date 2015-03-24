$(document).ready(function(){

	createGrid(16);
	
	coloring();

	function createGrid(numberOfDivs) {
		if(!numberOfDivs)
			numberOfDivs = 16;
		$divs = numberOfDivs;

		var $grid = $(".container");
		$grid.empty();
		
		var dimensions = ((960 - 2 * $divs) / $divs);
		for (var j = 0; j < $divs; j++) {
			for (var i = 0; i < $divs; i++) {
				$grid.append($("<div></div>").addClass("square").height(dimensions).width(dimensions));
			}
			
			$grid.append($("<div></div>").css("clear", "both"));	
		}
		
	};
	
	function coloring(){
		$(".square").on("mouseenter", function(){
			$(this).css("background", "white");
		});
	};

    function randomColor(){
   		var r = Math.floor(Math.random() * (256 - 1 + 1)) + 1;
   		var g = Math.floor(Math.random() * (256 - 1 + 1)) + 1;
   		var b = Math.floor(Math.random() * (256 - 1 + 1)) + 1;
   		return ("rgb(" + r + "," + g + "," + b + ")");
    };

    $("#new").click(function() {
		createGrid(prompt("Enter number of divs!"));
		coloring();
	});

    $("#clear").click(function() {
	 	$(".square").css("background","#65FF48");
	 	coloring();
	}); 

	$("#randomize").click(function() {
		$(".square").on("mouseenter", function(){
			$(this).css("background", randomColor);
		});
	});
});
