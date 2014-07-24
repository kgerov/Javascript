function createArray() {
	var allocated = [];
	for (var i = 0; i < 21; i++) {
		allocated.push(i*5);
	}
	for (var i = 0; i < allocated.length; i++) {
		console.log(allocated[i]);
	}
}

createArray();