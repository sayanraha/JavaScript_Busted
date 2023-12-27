const myObj = {
    js : "Javascript",
    cpp : "C++",
    py : "Python",
    rb : "Ruby",
    swift : "Swift"
}


// for in Loop :- The for...in loop in JavaScript is used to iterate over the enumerable properties of an object. It works with both built-in objects (like arrays or strings) and custom objects. Here's the basic syntax of the for...in loop:

for (const key in myObj) {
    //console.log(`${key} shortcut  is for ${myObj[key]}`);
}


// using for in loop in arrays

const arr = ["js","rb","py","java","cpp"]

for (const i in arr) {
    console.log(i , ":", arr[i]);
}


// we cannot iterate over maps using for...in loops