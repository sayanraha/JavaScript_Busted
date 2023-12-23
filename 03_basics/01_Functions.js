/*
    Function :
    A function in JavaScript is like a reusable set of instructions that performs a specific task or calculation. It's like a recipe or a set of steps you define once and can use multiple times.

    Ingredients of a Function:

    Name: It has a name so you can refer to it when you want to use it.

    Parameters: These are like variables that the function can use, and you can provide different values when you use the function.

    Instructions: These are the steps or code that the function will execute when you call it.

    Return: The function can optionally give back a result, like an answer to a calculation.
*/

function sayName() {
  console.log("Sayan Raha");
}

// sayName;// this means getting reference of function

sayName(); // this means executing a function

/*
function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}
*/

function addTwoNumbers(num1, num2) {
  // let res = num1 + num2;
  // return res;

  return num1 + num2;
}

// addTwoNumbers(3,4);
//const res = addTwoNumbers(10,15);
//console.log(res);// undefined

console.log(addTwoNumbers(10, 15));

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("Please enter a name");
  } else {
    return `${username} successfully logged in`;
  }
}

//console.log(loginUserMessage("Sayan Raha"));

loginUserMessage();

// rest operator concept

/*
function calculateCartPrice(num1){
    return num1;
}

console.log(calculateCartPrice(2));
// but if we want to pass more than 1 arguments then we use rest operator
*/

function calculateCartPrice(...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 300, 400, 500)); // we will receive an array

// Passing object to a function

const user = {
  username: "Sayan Raha",
  email: "sayan@google.com",
};

handleObject(user);

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.username}`);
}

// Passing arrays to a function

const myNewArray = [200, 300, 400, 500];

function returnSecondValue(getArray) {
    return getArray[2]
}   

console.log(returnSecondValue(myNewArray))
