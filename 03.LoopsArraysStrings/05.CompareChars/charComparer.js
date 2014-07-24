function compareChars() {
	var arr1 = arguments[0];
	var arr2 = arguments[1];

	if (arr1.length != arr2.length) {
		console.log('Not Equal');
	} else {
		var same = true;
		for (var i = 0; i < arr2.length; i++) {
			if (arr1[i] != arr2[i]) {
				same = false;
			}
		}
		if (same == true) {
			console.log('Equal');
		} else {
			console.log('Not Equal');
		}
	}
	
}

compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']);
compareChars(['3', '5', 'g', 'd'], ['5', '3', 'g', 'd']);
compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'], ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']);
