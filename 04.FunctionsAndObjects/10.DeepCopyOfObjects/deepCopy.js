function clone(obj) {
	var obj2 = {};
	for(var index in obj) {
		obj2[index] = obj[index];
	}

	return obj2;
}

function compareObjects(obj, objCopy) {
	if (obj == objCopy) {
		return "a == b --> true";
	} else {
		return "a == b --> false";
	}
}


var a = {name: 'Pesho', age: 21};
var b = clone(a); // a deep copy 
console.log(compareObjects(a, b));  

var a = {name: 'Pesho', age: 21} ;
var b = a; // not a deep copy
console.log(compareObjects(a, b));  
