function solve(arr) {
	var start = Number(arr[0]); //Check!
	var end = Number(arr[1]);
	var result = "<ul>\n";
	for (var i = start; i <= end; i++) {
		result += "<li>";
		var isRakia = false;

		var currNum = i.toString();
		for (var k = 0; k < currNum.length; k++) {
			var currTwoDigit = currNum[k] + currNum[k+1]; //REMOVE UNDEFINED

			for (var j = k+2; j < currNum.length; j++) { //END EARLY?
				var nextTwoDigit = currNum[j] + currNum[j+1];

				if (currTwoDigit == nextTwoDigit) {
					isRakia = true;
				}
			}
		}

		if (isRakia == true) {
			result += "<span class='rakiya'>" + i + '</span><a href="view.php?id='+ i +'>View</a>';
		} else {
			result += "<span class='num'>"+ i +"</span>";
		}

		result += "</li>\n"; //REMOVE NEW LINES
	}


	result += "</ul>";
	return result;
}

console.log(solve([5, 8]));
console.log(solve([11210, 11215]));
console.log(solve([55555, 55560]));