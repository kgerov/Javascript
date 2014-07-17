function devisionBy3(value) {
	var sum = 0;
	value *= 10;
	while(value > 10) {
		value = parseInt(value / 10);
		sum+=value%10;
	}

	if (sum%3==0) {
		return "the number is divided by 3 without remainder";
	} else {
		return "the number is not divided by 3 without remainder";
	}
}

console.log(devisionBy3(12));
console.log(devisionBy3(189));
console.log(devisionBy3(591));