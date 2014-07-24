function findMaxSequence(value) {
	var maxArr = [];
	var maxCount = 0;
	var isNew = true;
	var currCount = 1;
	var currNum = value[i];
	var currArr = [currNum];
	for (var i = 0; i < value.length-1; i++) {
		if (isNew) {
			var currCount = 1;
			var currNum = value[i];
			var currArr = [currNum];
			isNew = false;
			
		}
		if (currNum < value[i+1]) {
			currCount++;
			currNum = value[i+1];
			currArr.push(currNum);
			isNew = false;
		} else {
			isNew = true;
		}
		if (currCount > maxCount) {
			maxCount = currCount;
			maxArr = currArr;
		}
	}
	if (maxCount == 1) {
		return "No";
	} else {
		return maxArr;		
	}
}

console.log(findMaxSequence([3, 2, 3, 4, 2, 2, 4]));
console.log(findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]));
console.log(findMaxSequence([3, 2, 1]));