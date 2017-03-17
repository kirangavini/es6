var age = 25;

function printHello () {
	console.log("Hello");
}

var person = {
	name: 'Andrew',
	age: age,
	printHello,
	['hello' + (3+2) ]: 'I am here',
	printAge () {
		console.log(this.age);
	}
}

person.printAge();