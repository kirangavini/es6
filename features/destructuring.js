// var array = ['first', 'second', 'third'];
// var [a, , c] = array;

// console.log(a, c);

var todo = {
	description: 'watch new Es6',
	completed: false
};
// var {description: message, completed} = todo;

// console.log(message);
// console.log(completed);

function gettodostatus ({completed}) {
    if (typeof completed === 'boolean') {
    	  return [`Todo is ${completed ? '' : 'not'} completed.`]
         // console.log();
    } else {
    	return [undefined, {error: 'Invalid todo item'}];
    	// console.log(`todo error not valid`);

    }
}

var [res, err] = gettodostatus(todo);
if (err) {
	console.log(err.error);
} else {
	console.log(res);
}