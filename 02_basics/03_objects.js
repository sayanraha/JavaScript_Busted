// Two ways of creating objects :

/*
    1. Object created using literals(no singleton objects formed)

    2. Object created using constructor

    *** singleton object is created when you create object using constructor ***

*/





// 1. Object creation using  Literals


/* Interview question : Ek symbol data-type k variable lo usko, object k "key" mai add karo  and print karke dikha do */

const mySym = Symbol("key1");

const JsUser = {
/* key   value */
  name: "Sayan",
  fullname: "Sayan Raha",
  [mySym]: "myKey1", // defining symbol in an object
  age: 21,
  location: "Delhi",
  email: "sayan@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// accessing objects-> Using .(dot operator) or Using [] square bracket

//console.log(JsUser.name);
//console.log(JsUser["fullname"]);
//console.log(JsUser[mySym]); //accessing symbol within an object

// Changing object values

JsUser.email = "sayan@chatgpt.com";
//console.log(JsUser.email);
// freezing an Object so that we cannot change its values

//Object.freeze(JsUser); //Object on which to lock the attributes.
/*
Prevents the modification of existing property attributes and values, and prevents the addition of new properties.*/
JsUser.name = "Rahul";
//console.log(JsUser.name); // O/P-> Sayan


// Declaring function using the object

JsUser.greeting = function(){
   // console.log("Hello  JS User");
}

console.log(JsUser.greeting());//undefined -> function will be executed
console.log(JsUser.greeting);//[Function (anonymous)] -> we get the reference of the function


JsUser.greetingTwo = function(){
    //accessing the "name" key inside the function we use this keyword(same object ko reference karne k liye this ko use kara jata hain)

    console.log(`Hello User, ${this.name} this side`);
}

console.log(JsUser.greetingTwo());
