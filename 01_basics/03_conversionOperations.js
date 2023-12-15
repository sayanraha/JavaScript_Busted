let score = "sayan"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);



//Notes 

/*
        "33" -> 33
        "33abc" -> NaN(Not a Number)
        true -> 1 and false -> 0

*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn); 

/*
    1 -> true
    0 -> false

    "" -> false
    "abcd" -> true

*/



//****************************************Operations****************************************


let value = 3
let negValue = -value

// console.log(negValue)

// Arithmetic Operations

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)





let str1 = "hello"
let str2 = "  sayan"

let str3 = str1 + str2 // string concatenation

console.log(str3);


//tricky part

// what should be the output ?????

console.log("1"+2);// 12
console.log(1 + "2");// 12
console.log("1" + 2 + 2);// 122
console.log(1 + 2 + "2");// 32 (here 1 + 2 is treated as a number and then concatenated as a string with "2")


console.log(+true); // 1
console.log(+""); // 0


// this is not a good approach of defining variables
let num1 , num2 , num3

num1 = num2 = num3 = 5 + 5

let gameCounter = 100
gameCounter++

console.log(gameCounter);

