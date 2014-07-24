function findNthDigit(arr) {
	var n = arr[0];
	var num = arr[1];
	var numS = num.toString();
	var count = numS.match(/[0-9]/g);
	if (count.length < n) {
		return "undefined";
	}
	for (var i = count.length-1, j = 1; i >= 0; i--, j++) {
		if (j==n) {
			return count[i];
		}
	}
}

console.log(findNthDigit([1, 6]));
console.log(findNthDigit([2, -55]));
console.log(findNthDigit([6, 923456]));
console.log(findNthDigit([3, 1451.78]));
console.log(findNthDigit([6, 888.88]));