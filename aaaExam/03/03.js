function solve(arr) {
	var sortTable = {}; //ARE ALL PRICES UNIQUE?
	for (var i = 2; i < arr.length-1; i++) {
		var row = arr[i];
		var row = row.replace("<td>", "");
		var index = row.indexOf("<td>") + 4; //CAN WE HAVE A CLASS OR ID
		var price = "";
		while(row[index] != "<") {
			price += row[index]; 
			index++;
		}
		if (!sortTable[Number(price)]) {
			sortTable[Number(price)] = [];
		} 

		sortTable[Number(price)].push(arr[i])
	}

	var prices = [];

	for (var c in sortTable) {
		prices.push(c);
	}

	prices.sort(function(a,b) { return a - b;});

	var result = arr[0] + "\n" + arr[1] + "\n";//return array or String?

	for (var i = 0; i < prices.length; i++) {
		for (var j = 0; j < sortTable[prices[i]].length; j++) {
			result+=sortTable[prices[i]][j] + "\n";
		}
	}

	result += arr[arr.length-1];
	return result;
}

console.log(solve(["<table>", "<tr><th>Product</th><th>Price</th><th>Votes</th></tr>", "<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>", "<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>", "<tr><td>Laptop HP 250 G2</td><td>629</td><td>+1</td></tr>", "<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>", "<tr><td>Cofee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>", "</table>"]));