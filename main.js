$(document).ready(function(){

	createGrid(16);
	
	coloring();
	var gridSize;
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
		gridSize = numberOfDivs;
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
    	do{
    		var $divs = Number(prompt("Please enter a number from 1 to 64"));
		}while(isNaN($divs) || $divs > 64 || $divs < 1);
		createGrid($divs);
		coloring();
	});

    $("#clear").click(function() {
	 	$(".square").css("background","#65FF48");
	 	coloring();
	}); 

	$("#randomize").click(function() {
		$(".square").css("background","#65FF48");
		$(".square").on("mouseenter", function(){
			$(this).css("background", randomColor);
		});
	});

	$("#trail").on("click", function(){
		createGrid(gridSize);
			$(".square").hover(function(){
				$(this).css({"opacity": 0});
			}, function(){
				$(this).fadeTo("slow", 1);
			});
	});
});
