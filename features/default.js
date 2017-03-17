// function sayHello (name = 'world') {
// 	console.log('heelo' + name + '!');
// }

// sayHello();

function greetUser (user = {name: 'Anonymous'}) {
	console.log('Hello' + user.name +'!');

}

greetUser();
greetUser({name: 'Bib'});