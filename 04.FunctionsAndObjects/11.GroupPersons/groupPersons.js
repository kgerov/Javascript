function group(people, group) {
	var result = {};

	for (var i = 0; i < people.length; i++) {
		var curr = people[i][group];
		if (!(("Group " + curr) in result)) {
			result["Group " + curr] = [];
		}
		result["Group " + curr].push(people[i]['firstname'] + " " + people[i]['lastname'] + "(age " + people[i]['age'] + ")");
	}

	return result;
}

function Person(firstname, lastname, age)
{
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;

	Person.prototype.getfirstname = function() {
	    return this.firstname;
	}

	Person.prototype.getlastname = function() {
	    return this.lastname;
	}

	Person.prototype.getAge = function() {
	    return this.age;
	}
}

function printAssArray(res1) {
	for (var index in res1) {
		var str = index + ": [";
		for (var i = 0; i < res1[index].length; i++) {
			if (i != 0) {
				str += ", "
			}
			str +=  res1[index][i];	
		}
		str += "]";
		console.log(str);
	}
}

//INPUT OF PROGRAM
var people = [];
people.push(new Person("Scott", "Guthrie", 38));
people.push(new Person("Scott", "Johns", 36));
people.push(new Person("Scott", "Hanselman", 39));
people.push(new Person("Jesse", "Liberty", 57));
people.push(new Person("Jon", "Skeet", 38));

printAssArray(group(people,  "firstname"));
console.log('------------------------------------');

var people = [];
people.push(new Person("Scott", "Guthrie", 38));
people.push(new Person("Scott", "Johns", 40));
people.push(new Person("Scott", "Hanselman", 36));
people.push(new Person("Jesse", "Liberty", 57));
people.push(new Person("Jon", "Skeet", 36));

printAssArray(group(people, 'age'));
console.log('------------------------------------');

var people = [];
people.push(new Person("Scott", "Guthrie", 38));
people.push(new Person("Scott", "Johns", 40));
people.push(new Person("Scott", "Hanselman", 36));
people.push(new Person("Jesse", "Johns", 57));
people.push(new Person("Jon", "Skeet", 36));
printAssArray(group(people, 'lastname'));