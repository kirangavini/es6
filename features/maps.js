// var mymap = new Map();

// // set 
// mymap.set('name', 'kiran');

// // get
// console.log(mymap.get('name'));

// mymap.set('age', 23);
// //has
// console.log(mymap.has('age'));

// //delete
// mymap.delete('name');

// //clear
// mymap.clear();
// //size
// console.log(mymap.size);

// //var user = {name: 'kiran'};
// var user = true;
// mymap.set(user, 'kc');
// console.log(mymap.get(user));

// var myMap = new Map();
// myMap.set(1, 'Andrew');
// myMap.set(2, 'An');
// myMap.set(3, 'And');

// console.log([...myMap]);
// console.log(myMap.keys());
// console.log(myMap.values());

// challenge area

var location = {name: 'kc'};
var secondloc = {name: 'atl'};
var weather = new Map();
function setWeather (location , temp){
  weather.set(location, temp);
}

function printWeather (location) {
    if (weather.has(location)) {
         console.log(`its ${weather.get(location)} in ${location.name}`);
    } else {
    	console.log(`no weather recorded for ${location.name}`);
    }

}

setWeather(location, 22);
printWeather(location);
printWeather(secondloc);
