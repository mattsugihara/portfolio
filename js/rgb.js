var inputFields = document.getElementsByTagName('input');

var hexColor = "";
var hexRed = "ff";
var hexGreen ="ff";
var hexBlue = "ff";


function updateBackground(){
	var displayHexColor = '#' + hexColor;
	document.body.style.backgroundColor = displayHexColor;
	document.getElementById('hexValue').innerHTML=displayHexColor;
}

function updateColorValue(color) {
	inputVal = inputFields[color].value;

	
	//Get input value. If null, assume 255
	if (1 > inputVal.length){rgbVal = 255;}
	else{rgbVal= parseInt(inputVal);}

  hexVal = rgbVal.toString(16);

	//Add a leading zero of single digits
	if (2 > hexVal.length){
		hexVal = ("0" + hexVal).slice(-2);
	}

	//Set appropriate color
	if 			(0 == color)		{hexRed = hexVal;}
	else if (1 == color)	{hexGreen = hexVal;}
	else if (2 == color)	 {hexBlue = hexVal;}

	//new hex string
	hexColor = hexRed + hexGreen + hexBlue;
	updateBackground();

	//if input length is 3, go to next field
	if (3 <= inputVal.length){
		nextColor = (color + 1);
		if(3>nextColor){
			inputFields[nextColor].focus();
		}
	}
}

//eventually this should also prevent input >255
function cleanInput (color) {
	lengthOfCurrentField = inputFields[color].value.length;
	previousColor = (color - 1);
	nextColor = color+1;
	if (((8 == event.keyCode) && (0 == lengthOfCurrentField)) && (previousColor >= 0)){
		inputFields[previousColor].focus();
	}
	if ((((188 == event.keyCode) || (32 == event.keyCode)) || (44 == event.keyCode)) || (13 == event.keyCode)) {
		event.preventDefault();
		inputFields[nextColor].focus();
	}
}


document.getElementById('inputRed').addEventListener('input',function(){updateColorValue(0);},true);
document.getElementById('inputGreen').addEventListener('input',function(){updateColorValue(1);},true);
document.getElementById('inputBlue').addEventListener('input',function(){updateColorValue(2);},true);

// for (var i = inputFields.length - 1; i >= 0; i--) {
// 	fieldNumber = i.toString();
// 	inputFields[i].addEventListener('keydown',function(){cleanInput(fieldNumber);},true);
// };
document.getElementById('inputRed').addEventListener('keydown',function(){cleanInput(0);},true);
document.getElementById('inputGreen').addEventListener('keydown',function(){cleanInput(1);},true);
document.getElementById('inputBlue').addEventListener('keydown',function(){cleanInput(2);},true);