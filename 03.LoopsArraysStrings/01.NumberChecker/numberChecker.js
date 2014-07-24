function printNumbers(n) {
	if (n > 0) {
		var result = [];
		for (var i = 1; i <= n; i++) {
			if (!(i%4==0 || i%5==0)) {
				result.push(i);
			}
		}
		var printResult = result.join();
		console.log(printResult);
	} else {
		console.log("No");
	}
}

printNumbers(20);
printNumbers(-5);
printNumbers(13);