var people = ['Andrew', 'Vikram', 'john', 'kiran'];

// people.forEach(function (name) {
// 	console.log(name);
// });

// people.forEach((name) => console.log(name));

// people.forEach((name) => {
//      console.log('welcome');
//      console.log(name)


// });

// function add (a,b) {
// 	return a + b;
// }

//var add = (a,b) => a + b;
var add = (a,b) => { return a+b;}

console.log(add(3,9));

var person = {
	name: 'kiran',
	likes: ['running','gym','nature'],
	generateGreeter: function (){
	//	var that = this;
	//	return function () {
	  return () => {
            
			console.log(this.name); 
			//console.log('likes'+ this.likes)
		}
	},
	printlikes: function () {
		this.likes.forEach((like) => {
            console.log(`${this.name} likes ${like}`);
		});
	}
};

person.generateGreeter()();
person.printlikes();