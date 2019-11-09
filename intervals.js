autowatch = 1

inlets = 2
outlets = 2

var myval
var newHarm = []
var fund //my fundamental

if (jsarguments.length>1)
	myval = jsarguments[1];

function bang(){
	var newList
	if(myval.length > 0){
		newList = mult(fund)
		outlet(0,newList)
	}
}

//calculate the harmonic ratio. the first value in the list will be a prime number.
function list(){
	myval = arrayfromargs(arguments)
	if(myval.length > 0){
		newHarm = ratio(myval)
		outlet(0,newHarm)
		outlet(1, myval.length)
	}else{
		outlet(1,NaN)
	}
}

function msg_int(value){
	if(inlets == 2){
		fund = value
	}else{

	}
}
function msg_float(value){
	if(inlets == 2){
		fund = value
	}else{

	}
}

function ratio(arr){
	//calculate harmonic ratio
	//1. find the first number from list. (this would be our fundamental)
	//2. divide other numbers with fundamental
	//3. push to a new list
	//4. output a ratio list
	var inputArray = arr.slice()
	var ratio = [] //array declaration.

	if(inputArray.length > 0){
		var fund = Math.round(inputArray[0]*1000)/1000 //calculate fundamental.
		//Math round is quite trivial but it's crucial for limiting precision in digit***
		for(var i=0; i <inputArray.length;i++){
			var partials = (Math.round(inputArray[i]*1000)/1000) / fund //calculate the ratio by dividing numbers
			ratio.push(Math.round(partials*1000)/1000) //push to a new array
		}
	}
	return ratio
}

function mult(input){
	fund = input
	var newPartials = []
	var arrHarm = []
	arrHarm = newHarm.slice()
	if(inlets == 2 && arrHarm.length > 0){
			for(var i=0;i < arrHarm.length;i++){
				newPartials.push(fund * arrHarm[i])
			}
		return newPartials
	}else{
		return(NaN)
	}
}

function sortFloat(a,b){
	return a - b; //note that JS sort function treats everything as strings
}

post(jsarguments[0] + " compiled"+'\n')
