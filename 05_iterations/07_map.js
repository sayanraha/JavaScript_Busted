const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* 
    Calls a defined callback function on each element of an array, and returns an array that contains the results.

@param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
*/

// const newNums = myNumbers.map((num) => num + 10);


// chaining


const newNums = myNumbers
                        .map((num) => num * 10)
                        .map((num) => num + 1)
                        .filter((num) => num >= 40)
                        

console.log(newNums);
