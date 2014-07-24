function findMaxSequence(value) {
	var maxCount = 0;
	var maxArr = [];
	for (var i = 0; i < value.length; i++) {
		var currCounter = 0;
		var currWord = value[i];
		var currArr = [];
		var j = i;
		while(currWord === value[j]) {
			currCounter++;
			currArr.push(value[j]);
			j++;
		}
		if (currCounter >= maxCount) {
			maxCount = currCounter;
			maxArr = currArr;
		}
	}
	return maxArr;
}

console.log(findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));
console.log(findMaxSequence(['happy']));
console.log(findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']));