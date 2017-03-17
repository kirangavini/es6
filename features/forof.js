// var locations = [];

// locations.push({
// 	name: 'Philly',
// 	weather: 23
// });


// locations.push({
// 	name: 'mex',
// 	weather: 32
// });

// for (let location of locations) {
//     console.log(`its ${location.weather} in ${location.name}`);
// }

// function averagegrade (...adder) {
// 	adder.forEach(function (addvar) {
// 		console.log(addvar/addvar);

// 	});
// }
// averagegrade(5,7,1);



function averagegrade (...grades) {
	var total = 0;
	for (let grade of grades) {
		total += grade;
	}

	return (total / grades.length)


}

var total = averagegrade(1,44,99);
console.log(total);
