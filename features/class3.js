class Person {
    constructor (name) {
       this.name = typeof name === 'string' ? Person.capitalizeWord(name) : 'Anonymous';   
    }
    set name (val) {
       this._name = Person.capitalizeWord(val);
    }
    get name () {
        return this._name + ' test';
    }
    printgreeting () {
        console.log(`Hi, i AM ${this.name}!`);
    } 
    static capitalizeWord (word) {
        return word[0].toUpperCase() + word.slice(1);
    } 

} 

class Employee extends Person {
    constructor (name, job = 'unemployed') {
        super(name);            //refers to parent constructor this._name
        this.job = job;
    }
    printgreeting () {
        console.log(`Hi i am ${this.name} and i am a ${this.job}!`);
    }
    callSuperMethod () {
          super.printgreeting();   
    }

}


//var person1 = new Employee('andrew', 'developer');
var person1 = new Employee();
//person1.name = 'jen';
person1.printgreeting();
person1.callSuperMethod();

var person2 = new Person();
person2.printgreeting();

console.log(Person.capitalizeWord('mike'));



