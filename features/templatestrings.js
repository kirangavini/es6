// function greet (name= 'kiran') {
// 	console.log('Hello' +name + '!');
// 	console.log(`Hello ${name}!`)
// }

// greet();
// greet('kran');

// console.log(`1 +6 = ${1+6}`)

// console.log(`Hey, 

// This is a test run!!!	

// by -kiran
// `);

var person = {
	name: 'Kiran',
	age: 24
};

var defaultperson = {
	name: 'xyz',
	age: 0
};

function welcomeUser (person = defaultperson) {
    console.log(`Hello ${person.name} You are ${person.age}.`);
}

welcomeUser();
welcomeUser(person);