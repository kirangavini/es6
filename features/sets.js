// var chatrooms = new Set();

// // Add
// chatrooms.add('Runners');
// chatrooms.add('Runners');
// chatrooms.add('bikers');
// //size
// console.log(chatrooms.size);

// console.log(`Does theset have runners: ${chatrooms.has('Runners')}`)

// // chatrooms.delete('bikers');
// // console.log(chatrooms.size);
// // console.log(chatrooms.clear);
// chatrooms.add({name: 'kiran'});
// // To array
// console.log([...chatrooms]);

// chatrooms.forEach(function (chatroom) {
//       console.log(`found chat room: ${chatroom}`);
// });


//challenge 
//define a set
var movie = new Set();
//add

function addMovie (movieTitle) {
        if (movie.has(movieTitle)){
            // error 
            console.log(`Error: ${movieTitle} already exists`);  
        } else {
        	movie.add(movieTitle);
        	console.log(`Success: ${movieTitle} was added!`);
            // success 
        }
}

addMovie('A new Hope');
addMovie('District');
addMovie('A new Hope');