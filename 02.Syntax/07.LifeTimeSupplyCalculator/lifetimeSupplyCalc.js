function calcSupply(currAge, maxAge, foodAmount) {
	return (maxAge-currAge)*365*foodAmount + "kg";
}

console.log(calcSupply(38, 118, 05) + " of chocolate would be enough until I am 118 years old.");
console.log(calcSupply(20, 87, 2) + " of fruits would be enough until I am 87 years old.");
console.log(calcSupply(16, 102, 1.1) + " of nuts would be enough until I am 102 years old.");