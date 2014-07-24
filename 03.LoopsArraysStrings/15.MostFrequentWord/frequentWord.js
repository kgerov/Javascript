function wordInArray(count, word) {
	for(index in count) {
		if(index == word){
			return true;
		}
	}
	return false;
}

function findMostFreqWord(value) {
	value = value.toLowerCase();
	var words = value.split(/[^A-Za-z]/);
	for (var i = 0; i < words.length; i++) {
		if (words[i] == "") {
			words.splice(i, 1);
		}
	}
	var count = {};
	for (var i = 0; i < words.length; i++) {
		if (wordInArray(count, words[i])) {
			count[words[i]] += 1;
		} else {
			count[words[i]] = 1;
		}
	}

	var max = 0;
	for (index in count) {
		if (count[index] > max) {
			max = count[index];
		}
	}
	
	var keySort = [];
	for(index in count) {
		keySort.push(index);
	}

	keySort.sort();

	var countRes = {};

	for (var i = 0; i < keySort.length; i++) {
		countRes[keySort[i]] = count[keySort[i]];
	}

	var result = "";
	for(index in countRes) {
		if (count[index] == max) {
			result += index + " -> " + count[index] + " times\n";
		}
	}
	return result;
}
console.log(findMostFreqWord('in the middle of the night'));
console.log(findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.'));
console.log(findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.'));
