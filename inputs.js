autowatch = 1;

inlets = 2
outlets = 2

var myval=0;
//conviniently, most of message and lists are stored in an abtrary array, called jsarguments.
//whenever JS object receives any number / message, it starts from arrays 1.
//the first index is always occupied by its name.
if (jsarguments.length>1)
	myval = jsarguments[1];
//we use global variable for myVal for all instances

var in1, in2;
var numbers = []
var mem1

function bang()
{
	outlet(0,myval);
}

function msg_int(value){
  var output
  var index = inlet;
  numbers[inlet] = value;
  outlet(0, numbers[index]) //output result
  outlet(1,index+1) //tells the input inlets
}

function list(){
	myval = arrayfromargs(arguments)
	post("received list " + myval + "\n");
	if(myval.length > 0){
		outlet(0, myval) //output array is same as just a variable.
		outlet(1, myval.length)
		post("list length: "+ myval.length)
	}else{
		outlet(1,0)
	}
}
function find(index){
	//find an elements from array
	if(myval.length > 0){
		if(index <= myval.length){
			outlet(0,myval[index])
		}else{
			outlet(0,NaN)
			post("Array Out of Bounds")
		}
	}
}
function uzi(){
	//max object uzi-ish function. iterates all elements sequentially.
	var index = 0
	if(myval.length >0 ){
		for(var i=0;i < myval.length;i++){
			index = i
			outlet(0,myval[i])
			outlet(1,index)
			if(index == myval.length){
				post("EOL")
			}
		}
	}else{
		post("input lists first")
	}
}


function anything()
{
	var a = arrayfromargs(messagename, arguments);
	post("received message " + a + "\n");
	post("Length : "+a.length);
	myval = a;

	outlet(0,a)
	outlet(1,a.length)
}
post(jsarguments[0] + " compiled") //END OF CODE, checking autowatch is working on max console.
