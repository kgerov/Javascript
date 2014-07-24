function findYoungestPerson(persons) {
	var maxAge = 0;
	var maxName = "";
	for (var i = 0; i < persons.length; i++) {
		var currName = "";
		var currCount = 0;
		for(index in persons[i]) {

			if (index == "firstname") {
				currName += persons[i][index] + " ";
			}
			if (index == "lastname") {
				currName += persons[i][index];
			}
			if (index == "age") {
				currCount = persons[i][index];
				if (i == 0) {
					maxAge = currCount;
					maxName = currName; 
				}
				if (currCount < maxAge) {
					maxAge = currCount;
					maxName = currName;
				}
			}
		}
	}

	return "The youngest person is " + maxName;
}

var persons = [
  { firstname : 'George', lastname: 'Kolev', age: 32}, 
  { firstname : 'Bay', lastname: 'Ivan', age: 81},
  { firstname : 'Baba', lastname: 'Ginka', age: 40}]
console.log(findYoungestPerson(persons));