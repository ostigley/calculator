var inputStr = "";
var values = [];
var output;
var displayStr = "";

$("button").click(function(){
	inputStr += this.value;
	if(this.value == "C") {
		clear();
	} else if(this.value == "=") {
//		calculate(inputStr);
//	$('#outPut').html(output);

	}
	
	$('#outPut').html(inputStr);

});

var clear = function() {

	inputStr = "";
}

var calculate = function(input){
		output = eval(input);
};

var display = function(myStr){
	myStr.replace(/[/]/g, "÷");
}

