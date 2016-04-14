var inputStr = "";
var values = [];
var output;
var displayStr = "";

$("button").click(function(){
	inputStr += this.value;
	displayStr += this.innerHTML;
	if(this.value == "C") {
		clear();
	} else if( this.value == "=") {
//		calculate(inputStr);
//	$('#outPut').html(output);
	}


//	display(inputStr);
	$('#outPut').html(displayStr);

});

var clear = function() {

	inputStr = "";
	displayStr = "";
}

var calculate = function(input){
	output = eval(input);
};




