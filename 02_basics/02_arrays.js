const marvel_heros = ["thor","ironman","spiderman"]

const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]


// merging of two arrays -> use method 1 : concat method 

/*
const allHeros = marvel_heros.concat(dc_heros)

console.log(allHeros);
*/

// merging of two  or more arrays -> use method 2 : spread operator (V.imp method)


const all_newHeros = [...marvel_heros,...dc_heros]

console.log(all_newHeros);



// using flat method

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(another_array);
console.log(real_another_array);



// check is Array or not -> output : true / false

console.log(Array.isArray("Sayan"));

// convert to an array 

console.log(Array.from("Sayan"));//Creates an array from an iterable object.

//tricky 

console.log(Array.from({name : "sayan"})); // returns [] array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));//Returns a new array from a set of elements.