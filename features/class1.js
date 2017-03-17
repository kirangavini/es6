class Person {
	constructor (name) {
       this.name = typeof name === 'string' ? Person.capitalizeWord(name) : 'Anonymous';   
	}
    printgreeting () {
    	console.log(`Hi, i AM ${this.name}!`);
    } 
    static capitalizeWord (word) {
    	return word[0].toUpperCase() + word.slice(1);
    } 

} 


var person1 = new Person('andrew');
person1.printgreeting();

var person2 = new Person();
person2.printgreeting();

console.log(Person.capitalizeWord('mike'));