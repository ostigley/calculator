// Variables declaired: 

var inputStr = "";
var values = [];
var output;
var displayStr = "0.00";
$('#outPut').html(displayStr);
// clear functions wipes the slate clean. 
var clear = function() {

	inputStr = "";
	displayStr = "0.00";

}

//This code monitors button presses and takes the values of the buttons. 
//When equals hit, evaluates buttons pressed (from inputSTR)
$("button").click(function(){
	if(this.value == "C") {
		//clear inputs
		clear();

	} else if( this.value == "=") {
		//perform calculation on string
		displayStr = String(eval(inputStr));
		inputStr = String(eval(inputStr));
	} else {
		//push value of button to input storage 
		inputStr += this.value;
		//push html of button to display string
		if(displayStr == "0.00") {
			displayStr= "";
		}
		displayStr += this.innerHTML;

	}

	//	display display string in calculator #outPut
	$('#outPut').html(displayStr);

});





