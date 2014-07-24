String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

function fixCasing(value) {
	while(value.indexOf("<upcase>") != -1) {
		var index = value.indexOf("<upcase>") + 8;
		while(value[index] != "<") {
			value = value.replaceAt(index, value[index].toUpperCase());
			index++;
		}
		value = value.replace("<upcase>", "");
		value = value.replace("</upcase>", "");
	}

	while(value.indexOf("<mixcase>") != -1) {
		var index = value.indexOf("<mixcase>") + 8;
		while(value[index] != "<") {
			var choose = (Math.floor(Math.random() * 1000)%2==0);
			if (choose) {
				value = value.replaceAt(index, value[index].toUpperCase());
			} else {
				value = value.replaceAt(index, value[index].toLowerCase());
			}
			index++;
		}
		value = value.replace("<mixcase>", "");
		value = value.replace("</mixcase>", "");
	}

	while(value.indexOf("<lowcase>") != -1) {
		var index = value.indexOf("<lowcase>") + 8;
		while(value[index] != "<") {
			value = value.replaceAt(index, value[index].toLowerCase());
			index++;
		}
		value = value.replace("<lowcase>", "");
		value = value.replace("</lowcase>", "");
	}
	return value;
}

console.log(fixCasing("We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else."));