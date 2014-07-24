function replaceSpaces(value) {
	re = new RegExp(" ", "g");
	value = value.replace(re, "");
	return value;
}

console.log(replaceSpaces("But you were living in another world tryin' to get your message through"));