function findMostFreqNum(value) {
	var isNew = true;
	var maxCounter = 0;
	var maxNum = value[0];
	for (var i = 0; i < value.length-1; i++) {
		var currCounter = 1;
		for (var j = i+1; j < value.length; j++) {
			var currNum = value[i];
			if (currNum == value[j]) {
				currCounter++;
			}
		}
		if (maxCounter < currCounter) {
			maxCounter = currCounter;
			maxNum = currNum;
		}
	}
	return maxNum + "(" + maxCounter + " times)";
}

console.log(findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]));
console.log(findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]));
console.log(findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));