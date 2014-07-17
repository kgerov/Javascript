function variableTypes(value) {
	for(var i = 0; i < value.length; i++) {
		if (typeof(value[i])=="string") {
			console.log("My name is " + value[i] +" //type is string");
		} else if(typeof(value[i])=="number") {
			console.log("My age: " + value[i] +" //type is number");
		} else if(typeof(value[i])=="boolean") {
			console.log("I am male: " + value[i] +" //type is boolean");
		} else if(typeof(value[i])=="object") {
			console.log("My favorite foods are: " + value[i] +" //type is object");
		}
	}
}

variableTypes(['Pesho', 22,  true, ['fries', 'banana', 'cake']]);
