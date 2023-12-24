/*let a = 10
const b = 20
var c = 30*/

// {}-> curly braces with functions, if-else statements , loops defines a scope.


// everything we are writting within the functions, if-else statements , loops defines a block scope and outside is called global scope.

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a);  variable 'a' declared with keyword let cannot be executed outside the scope
// console.log(b);variable 'b' declared with keyword const cannot be executed outside the scope
console.log(c); // but variable 'c' declared with keyword var can be executed which is a very bad problem for developers






// Nested Scope

function one(){
    const username = "Sayan"
    function two(){
        const website = "youtube.com"
        console.log(username);
    }
    //console.log(website); // this statement will throw error as we are trying to execute block-scope variable outside the scope. Hence the next statements will also be not executed.

    two();
}
one();





/**************** Interesting ****** ********/



// two basic ways of defining function


// 1st way - declaring a function

function addOne(num){
    return num + 1;
}

addOne(5)

// 2nd way - holding a function in a variable

const addTwo = function(num){
    return num + 2;
}

addTwo(10)



// now in the 1st approach, what we can do is we can call the function before the function declaration it it absolutely fine , but in case of the 2nd approach if we try to call the addTwo method before its declaration it will throw error , here the concept of Hoisting comes