// for of Loop : The for...of loop is specifically designed for iterating over iterable objects like arrays, strings, maps, sets, etc.

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
  console.log(`Each character is ${greet}`);
}

// Maps : Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration. Iteration happens in insertion order, which corresponds to the order in which each key-value pair was first inserted into the map by the set() method (that is, there wasn't a key with the same value already in the map when set() was called).

const map = new Map();

map.set("IN", "India"); //Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
map.set("USA", "United States of America");
map.set("Fr", "France");

console.log(map);
for (const [key, value] of map) {
  console.log(key, ":", value);
}


/*
Objects are not iterable using for of Loop.

const myObj = {
    'game1' : 'NFS',
    'game2' : 'PubG',
    'game3' : 'Avengers'
}

for (const [key,value] of myObj) {
    console.log(key,":",value);
}
*/