// array -> elements  can be heterogenous and arrays are resizable
// JS arrays are zero-based indexing
// JS array-copy operations create shallow copies

// ways of declaring array

const myArr = [0, 1, 2, 3, 4, 5];

const myHeros = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
//console.log(myArr[1]);

// Array methods(*** V.Imp ***)

// myArr.push(6); 
//Appends new elements to the end of an array, and returns the new length of the array.

//myArr.push(7);

//myArr.pop(); 
//Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

//myArr.unshift(10); 
//Inserts new elements at the start of an array, and returns the new length of the array.(***this is not an optimized approach***)

//myArr.shift(); //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

//console.log(myArr.includes(5)); //Determines whether an array includes a certain element, returning true or false as appropriate.

//console.log(myArr.indexOf(4)); //Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

const newArr = myArr.join(); //Adds all the elements of an array into a string, separated by the specified separator string.

console.log(myArr);
console.log(newArr);


// Slice and Splice

console.log("A",myArr);//o/p->A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3)//does not manipulates the original array

console.log(myn1);//o/p->[ 1, 2 ]



const myn2 = myArr.splice(1,3)//manipulates the original array
console.log("B",myArr);//B [ 0, 4, 5 ]
console.log(myn2);//[ 1, 2, 3 ]