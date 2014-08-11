function solve(arr) {
	var cmd = arr[0].toString();
	var deg = Number(cmd.match(/[0-9]+/));
	while(deg >= 360) {
		deg -= 360;
	}

	var matrix = [];
	var maxL = 0;
	for (var i = 1; i < arr.length; i++) {
		if (arr[i].length > maxL) {
			maxL = arr[i].length;
		}
	}
	for (var i = 1; i < arr.length; i++) {
		var currWord = [];
		var word = arr[i];
		for (var j = 0; j < word.length; j++) {
			currWord.push(word[j]);
		}
		while(currWord.length < maxL) {
			currWord.push(" ");
		}
		matrix.push(currWord);
	}

	var result = "";

	if (deg == 0) {
		for (var i = 0; i < matrix.length; i++) {
			for (var j = 0; j < maxL; j++) {
				result += matrix[i][j];
			}
			result += "\n";
		}
	} else if( deg == 90) {
		for (var i = 0; i < maxL; i++) {
				for (var  p = matrix.length-1;  p >= 0; p--) {
					result += matrix[p][i];
				}
			result += "\n";
		}
	} else if (deg == 180) {
		for (var i = matrix.length-1; i >= 0 ; i--) {
			for (var j = maxL-1; j >= 0; j--) {
				result += matrix[i][j];
			}
			result += "\n";
		}
	} else if (deg == 270) {
		for (var i = maxL-1; i >= 0; i--) {
			for (var  p = 0;  p < matrix.length; p++) {
				result += matrix[p][i];
			}
		result += "\n";
		}
	}

	return result;
}

console.log(solve(["Rotate(90)", "hello", "softuni", "exam"])); console.log('');
console.log(solve(["Rotate(180)", "hello", "softuni", "exam"])); console.log('');
console.log(solve(["Rotate(270)", "hello", "softuni", "exam"])); console.log('');
console.log(solve(["Rotate(720)", "js", "exam"])); console.log('');
console.log(solve(["Rotate(810)", "js", "exam"])); console.log('');
console.log(solve(["Rotate(0)", "js", "exam"])); console.log('');