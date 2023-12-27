/*

forEach Loop -> The forEach method is particularly useful when you want to perform an operation on each element of an array without the need for a separate loop construct. It is more readable and concise for this specific use case.

It's important to note that forEach is specific to arrays and doesn't work with other iterable objects. If you need to iterate over the properties of an object, you might still want to use a for...in loop or other methods provided by Object.keys, Object.values, or Object.entries.

*/

const coding = ["js", "ruby", "java", "python", "cpp"];

/*
coding.forEach((item) => {
  console.log(item);
});
*/


/*
function printMe(item){
    console.log(item);
}
*/

// coding.forEach(printMe)


coding.forEach((item,index,arr)=>{
    //console.log(item, index, arr);
})


// Array of Objects -> [{},{},{}]

const myCoding = [
    {
        langName : "Javascript",
        langFileName : "js"
    },
    {
        langName : "C++",
        langFileName : "cpp"
    },
    {
        langName : "Python",
        langFileName : "py"
    }
]


myCoding.forEach((item)=>{
    console.log(item.langName, item.langFileName);
})

