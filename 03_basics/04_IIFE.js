// Immediately Invoked Function Expression(IIFE) : Function that immediately gets executed and we don't want to reuse later.


// named IIFE
(function chai(){
    console.log("Database Connected");
})();// always remember to add semi-colon at the end , because if u want to execute any other functions after this it will throw error.

/* 
    Why to use IIFE? 
 -> IIFE is a way to create a self-contained block of code that runs immediately after it's defined, providing scope isolation and helping to avoid global scope pollution.


 Global Scope Pollution:

In JavaScript, variables declared without the var, let, or const keyword are automatically assigned to the global scope. This means they become part of the global object (in the case of browsers, it's the window object). Global variables can be accessed and modified from anywhere in your code, which can lead to unintended consequences and bugs.If multiple scripts or libraries are involved, naming conflicts may arise if they unintentionally use the same variable names in the global scope. This is what's referred to as "global scope pollution."

Eg.
// Global scope
var globalVariable = "I am global!";

function exampleFunction() {
    console.log(globalVariable); // Accessible from anywhere
}

exampleFunction();
console.log(globalVariable); // Also accessible here


Scope Isolation: 
It helps in creating a new scope for your variables. Variables declared inside the IIFE are not accessible from the outside, preventing any potential naming conflicts.

(function() {
    var insideVariable = "I am inside!";
    console.log(insideVariable); // Output: I am inside!
})();

console.log(insideVariable); // Error: insideVariable is not defined

*/

((name)=>{
    console.log(`Hello everyone , myself ${name}`);
})("Sayan");