String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

function reverseString(value) {
	var val = value;
	var iter = Math.floor(Number(val.length/2));
	for (var i = 0, j = val.length-1; i < iter; i++, j--) {
		var swap = val[i];
		val = val.replaceAt(i, val[j]);
		val = val.replaceAt(j, swap);
	}
	return val;
}

console.log(reverseString("sample"));
console.log(reverseString("softUni"));
console.log(reverseString("java script"));