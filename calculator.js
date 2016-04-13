var inputStr = "";
var values = [];

$("button").click(function(){
	inputStr += this.value;
	if(this.value == "C") {
		clear();
	}
	$('#outPut').html(inputStr);
});

var clear = function() {

	inputStr = "";
}

