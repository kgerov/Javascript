function lastDigitAsText(number) {
	if (number < 0) {
		number *= -1;
	}
	var digit = number%10;
	switch(digit) {
		case 0: return "Zero";
			break;
		case 1: return "One";
			break;
		case 2: return "Two";
			break;
		case 3: return "Three";
			break;
		case 4: return "Four";
			break;
		case 5: return "Five";
			break;
		case 6: return "Six";
			break;
		case 7: return "Seven";
			break;
		case 8: return "Eight";
			break;
		case 9: return "Nine";
			break;
		default: return "error";
			break;
	}
}

console.log(lastDigitAsText(6));
console.log(lastDigitAsText(-55));
console.log(lastDigitAsText(133));
console.log(lastDigitAsText(14567));