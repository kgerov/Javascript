function extractContent(value) {
	var words = value.match(/<[^> ]+[^>]*>[^<]*/g);

	for (var i = 0; i < words.length; i++) {
		if (i%2==1) {
			words[i] = "";
		}
	}

	for (var i = 0; i < words.length; i++) {
		if (words[i] == "") {
			words.splice(i, 1);
			i--;
		}
	}

	var result = "";

	for (var i = 0; i < words.length; i++) {
		var currWord = words[i];
		var index = currWord.indexOf(">");
		for (var j = index+1; j < currWord.length ; j++) {
			result += currWord[j];
		}
	}

	return result;
}

console.log(extractContent("<p>Hello</p><a href='http://w3c.org'>W3C</a>"));