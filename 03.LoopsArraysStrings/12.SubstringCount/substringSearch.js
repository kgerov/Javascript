function countSubstringOccur(value) {
	var subStr = value[0];
	var text = value[1];
	subStr = subStr.toLowerCase();
	text = text.toLowerCase();
	var currStr = "";
	var counter = 0;
	for (var i = 0; i < text.length; i++) {
		currStr = currStr + text[i];
		if (currStr.length == subStr.length) {
			i = i - (subStr.length-1);
			if (currStr == subStr) {
				counter++;
			}
			currStr = "";
		}
	}

	return counter;
}

console.log(countSubstringOccur(['in', "We are living in a yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days."]));
console.log(countSubstringOccur(['your', 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head.']));
console.log(countSubstringOccur(['but', "But you were living in another world tryin' to get your message through."]));