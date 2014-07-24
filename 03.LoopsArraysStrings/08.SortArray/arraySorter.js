function sortArray(value) {
	for (var i = 0; i < value.length; i++) {
		var index = i;
		for (var j = i+1; j < value.length; j++) {
			if (value[j] < value[index]) {
				index = j;
			}
		}
		var swap = value[index];
		value[index] = value[i];
		value[i] = swap;
	}
	return value;
}

console.log(sortArray([5, 4, 3, 2, 1]));
console.log(sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]));