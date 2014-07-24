function displayProperties() {
	var keys = [];
	for(var key in document){
		keys.push(key);
	}
	keys.sort();
	console.log(keys);
}

displayProperties();