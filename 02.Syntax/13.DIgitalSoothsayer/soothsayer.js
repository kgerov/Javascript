function soothsayer(value) {
	var result = new Array();
	for (var i = 0; i < value.length; i++) {
		var rand = parseInt(Math.random() * 4);
		result[i] = value[i][rand];
	}

	return result;
}

var result = soothsayer([[3, 5, 2, 7, 9], ["Java", "Python", "C#", "JavaScript", "Ruby"], ["Silicon Valley", "London", "Las Vegas", "Paris", "Sofia"], ["BMW", "Audi", "Lada", "Skoda", "Opel"]]);
console.log("You will work " + result[0] + " years on " + result[1] + ".");
console.log("You will live " + result[2] + " and drive " + result[3]);
