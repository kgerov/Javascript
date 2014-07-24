function replaceATag(value) {
	value = value.replace("<a", "[URL");
	value = value.replace("</a>", "[/URL]");
	return value;
}

console.log(replaceATag('<ul><li><a href=http://softuni.bg>SoftUni</a></li></ul>'));