function reverseWordsInString(str) {
	String.prototype.replaceAt=function(index, character) {
    	return this.substr(0, index) + character + this.substr(index+character.length);
	}
	var words = str.split(" ");
	for (var i = 0; i < words.length; i++) {
		var word = words[i];
		for (var j = 0, k = word.length-1; j < Math.floor(word.length/2); j++, k--) {
			var swap = word[j];
			word = word.replaceAt(j, word[k]);
			word = word.replaceAt(k, swap);		
		}
		words[i] = word;
	}

	return words.join(" ");
}

console.log(reverseWordsInString("Hello, how are you."));
console.log(reverseWordsInString("Life is pretty good, isn’t it?"));