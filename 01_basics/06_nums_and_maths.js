const score = 100
console.log(score);

const balance = new Number(100)//An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers.
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(1));//Returns a string representing a number in fixed-point notation.

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3));//Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

const hundreds = 1000000
//how to check how many 0s are present after 1

console.log(hundreds.toLocaleString());//A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
//Converts a number to a string by using the current or specified locale.






// ++++++++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++


console.log(Math);

console.log(Math.abs(-7));//Returns the absolute value of a number (the value without regard to whether it is positive or negative).

console.log(Math.round(4.6));//Returns a supplied numeric expression rounded to the nearest integer.(*****Mostly Used*****)

console.log(Math.ceil(4.4));//Any number greater than 4 i.e 4.1, 4.2 etc it will always return 5

console.log(Math.floor(4.9));//It will always return the lowest value whether you write 4.1 or 4.9 it will return 4

console.log(Math.min(5,2));//Returns the smaller of a set of supplied numeric expressions

console.log(Math.max(5,2));//Returns the larger of a set of supplied numeric expressions.


// V.imp Math method i.e Math.random() -> its value lies btw 0 and 1 always


console.log(Math.random());//Returns a pseudorandom number between 0 and 1.

// tricky part

console.log(Math.random() * 10 + 1);//Using this we will get the value btw 0 to 10 all decimal values

console.log(Math.floor(Math.random()*10)+ 1);// here the limit is from 1 to 10,  + 1 is added because if something like 0.1 occurs it won't give 0 so 1 is added


// custom range

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) ) + min);






