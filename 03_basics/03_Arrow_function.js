// this keyword refers to the current context of the scope

const user = {
  username: "sumit",
  price: 199,

  welcomeMessage: function () {
    console.log(`${this.username},welcome to the website`);
    console.log(this);
  },
};
user.welcomeMessage();

console.log(this); // o/p -> {} empty object as it is currently executed in the node environment.

// Arrow Functions : () => {}

const chai = () => {
  let username = "sayan";
  console.log(this.username); // undefined
};

chai();

// we can hold arrow functions in a variable

// this is a basic arrow function
/* const addTwo = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwo(3, 4));
*/


// another way -> implicit return

// note : whenever you use curly braces {} in arrow functions you have to mention the return statement

// const addTwo = (num1, num2) => (num1 + num2)



// return an object using arrow function

const addTwo = (num1 , num2) =>({username: "Rahul"})


console.log(addTwo(3, 4));
