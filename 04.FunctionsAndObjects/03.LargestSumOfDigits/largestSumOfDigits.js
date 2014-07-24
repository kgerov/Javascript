function findLargestBySumOfDigits(nums) {
	var maxSum = 0;
	var maxIndex = "";
	for (var i = 0; i < nums.length; i++) {
		var currSum = 0;
		var currNum = nums[i];
		if (typeof(currNum) != "number" || (Math.floor(currNum) != currNum)) {
			return nums[""];
		}
		if (currNum < 0) {
			currNum *= -1;
		}
		while(currNum >= 10) {
			currSum += currNum%10;
			currNum = Math.floor(currNum / 10);
		}
		currSum += currNum;
		if (currSum > maxSum) {
			maxSum = currSum;
			maxIndex = i;
		}
	}
	return nums[maxIndex];
}

console.log(findLargestBySumOfDigits([5, 10, 15, 111]));
console.log(findLargestBySumOfDigits([33, 44, -99, 0, 20]));
console.log(findLargestBySumOfDigits(['hello']));
console.log(findLargestBySumOfDigits([5, 3.3]));
