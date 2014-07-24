function wordInArray(count, word) {
	for(index in count) {
		if(index == word){
			return true;
		}
	}
	return false;
}

function findCardFrequency(value) {
	var result = value.split(/[^\w']+/);
	for (var i = 0; i < result.length; i++) {
		if (result[i] == "") {
			result.splice(i, 1);
		}
	}

	var cards = {};
	for (var i = 0; i < result.length; i++) {
		if (wordInArray(cards, result[i])) {
			cards[result[i]] += 1;
		} else {
			cards[result[i]] = 1;
		}
	}

	for(index in cards) {
		cards[index] = Math.round(cards[index]/result.length*100*100)/100 + "%";
	}

	var resultStr = "";

	for (var i = 0; i < result.length; i++) {
		for (var j = i+1; j < result.length; j++) {
			if (result[i] == result[j]) {
				result.splice(j, 1);
				j--;
			}	
		}
	}

	for (var i = 0; i < result.length; i++) {
		resultStr += result[i] + " -> " + cards[result[i]] + "\n";
	}

	return resultStr;
}

console.log(findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦'));
console.log(findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠'));
console.log(findCardFrequency('10♣ 10♥'));
