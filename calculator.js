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
	display(inputStr);
	$('#outPut').html(displayStr);

});

var clear = function() {

	inputStr = "";
}

var calculate = function(input){
		output = eval(input);
};

var display = function(myStr){
/*	var operators = {
		"*" : " x ",
		"/" : " ÷ ",
		"+" : " + ",
		"-" : " - ",
		"  " : " "
	};*/
console.log("What the Hell?")
	displayStr = myStr;

	displayStr = displayStr.replace(/\//g, " ÷ ");
	displayStr = displayStr.replace(/\*/g, " x ");
	displayStr = displayStr.replace(/\+/g, " + ");
	displayStr = displayStr.replace(/\-/g, " - ");

};

