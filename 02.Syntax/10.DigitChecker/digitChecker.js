function checkDigit(value) {
	for (var i = 0; i < 2; i++) {
		value = parseInt(value/10);	
	}

	if (value%10==3) {
		return true;
	} else {
		return false;
	}
}

console.log(checkDigit(1235));
console.log(checkDigit(25368));
console.log(checkDigit(123456));