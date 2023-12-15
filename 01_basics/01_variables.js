const accountId = 144553; 
let accountEmail = "sayan@google.com"
var accountPassword = "12345";
accountCity = "Delhi"; //bad approach for declaring variables


let accountState; //output-> undefined

/*
    Prefer not to use var,because of issue of block scope and functional scope.
*/ 

/*
      --->  var and let create variables that can be reassigned another value.

      ---> const creates "constant" variables that cannot be reassigned another value.

      --->  developers shouldn't use var anymore. They should use let or const instead.

      ---> if you're not going to change the value of a variable, it is good practice to use const.
*/

console.log(accountId);