function checkBrackets(value) {
	var b1Count = 0; 
	var b2Count = 0;
	for (var i = 0; i < value.length; i++) {
		if (value[i] == '(') {
			b1Count++;
		}
		if (value[i] == ')') {
			b2Count++;
		}
	}
	if (b1Count != b2Count) {
		return "incorrect";
	}
	for (var i = 0; i < value.length; i++) {
		if ((value[i] == ')') && b1Count != 0) {
			return false;
		}
		if (value[i] == "(") {
			b1Count--;
		}
	}
	return "correct";
}

console.log(checkBrackets('( ( a + b ) / 5 – d )'));
console.log(checkBrackets(') ( a + b ) )'));
console.log(checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'));