// Singleton object
//const tinderUser = new Object()

// Non-singleton object
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

// Nesting of Objects -> Declaring objects within an Object

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Sayan",
      lastname: "Raha",
    },
  },
};

//accessing values

//console.log(regularUser.fullname.userfullname.firstname);

// merging of Objects

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

//const obj3 = {...obj1,...obj2}//using spread operator

const obj3 = Object.assign(
  {},
  obj1,
  obj2
); /* Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

@param target — The target object to copy to.

@param source1 — The first source object from which to copy properties.

@param source2 — The second source object from which to copy properties. */

// console.log(obj3);

// Array of Objects

const users = [
  {
    id: 1,
    name: "Ramesh",
  },
  {
    id: 2,
    name: "Suresh",
  },
  {
    id: 3,
    name: "Vignesh",
  },
];

console.log(users[1].name);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

/*************************************    Object de-structure and JSON API intro      ************************************/

const course = {
  courseName: "React Masterclass",
  price: 2999,
  courseInstructor: "Ronny Aggarwal",
};

// const {courseName} = course

// suppose you don't want to print courseName instead print courseNm we can modify it

const { courseName: courseNm } = course;

console.log(courseNm);

/*
    JSON (JavaScript Object Notation) is a way of organizing data in a format that is easy for both humans and computers to understand. It uses a syntax similar to JavaScript object literals, which makes it familiar to programmers.

    Mostly the APIs are in JSON format
*/

// Jason Api Example

/*
{
    "name": "John Doe",
    "age": 30,
    "city": "New York",
    "isStudent": false,
    "grades": [85, 90, 78]
  }
  */

  // another way of Jason Api
  
  /*
  [
    {},
    {},
    {}
  ]
  */
