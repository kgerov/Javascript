String.prototype.splice = function( idx, rem, s ) {
    return (this.slice(0,idx) + s + this.slice(idx + Math.abs(rem)));
}

function findPalindromes(value) {
	value = value.toLowerCase();
	var words = value.split(/[., ]/);
	for (var i = 0; i < words.length; i++) {
		if (words[i] == "") {
			words.splice(i, 1);
		}
	}
	var result = [];
	for (var p= 0; p < words.length; p++) {
		var word = words[p];
		var isPolindrome = true;
		for (var i = 0, j = word.length-1; i < Math.floor(word.length/2); i++, j--) {
			if (word[i] != word[j]) {
				isPolindrome = false;
			}
		}
		if (isPolindrome) {
			result.push(word);
		}
	}

	var printResult = result.join();
	for (var i = 0; i < printResult.length; i++) {
		if(printResult[i] == ","){
			printResult = printResult.splice(i+1, 0, " ");
		}
	}
	return printResult;
}

console.log(findPalindromes('There is a man, his name was Bob.'));