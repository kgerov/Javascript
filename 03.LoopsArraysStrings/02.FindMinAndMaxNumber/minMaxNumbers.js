function findMinAndMaxValue(value) {
	var min;
	var max;
	for (var i = 0; i < value.length; i++) {
		if (i == 0) {
			min = value[i];
			max = value[i];
		}
		if (value[i] > max) {
			max = value[i];
		}
		if (value[i] < min) {
			min = value[i];
		}
	}

	console.log("Min -> " + min);
	console.log("Max -> " + max);
	console.log();
}


findMinAndMaxValue([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMaxValue([2, 2, 2, 2, 2]);
findMinAndMaxValue([500, 1, -23, 0, -300, 28, 35, 12]);
