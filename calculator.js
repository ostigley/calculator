var inputStr = "";
var values = [];
var output;
var displayStr = "";

$("button").click(function(){
	if(this.value == "C") {
		clear();
	} else if( this.value == "=") {
		displayStr = String(eval(inputStr));
		inputStr = String(eval(inputStr));
	} else {
		inputStr += this.value;
		displayStr += this.innerHTML;
	}

//	display(inputStr);
	$('#outPut').html(displayStr);

});

var clear = function() {

	inputStr = "";
	displayStr = "";
}

// var calculate = function(input){
// 	output = eval(input);
// };




