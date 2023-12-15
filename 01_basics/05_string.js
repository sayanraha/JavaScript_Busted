const name = "sayan"
const repoCount = 50

// traditional way of string concatenation

//console.log(name + repoCount); // this is not a good approach


// modern way , makes it more readable-> string interpolation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


//another way of declaring string

const gameName = new String('sayan77')

/*
        'sayan77' is stored in key-value pair form 

        key   value
        [0] : "s"
        [1] : "a"
        [2] : "y"
        [3] : "a"
        [4] : "n"
        [5] : "7"
        [6] : "7"

*/


// for accessing values of the string

console.log(gameName[0]);

//for accessing prototype

console.log(gameName.__proto__);

// some string methods

console.log(gameName.length);//Returns the length of a String object.

console.log(gameName.toUpperCase()); // it has not changed the original string as string is a primitive data-type and it uses the stack memory were it only gets the copy of the variables

console.log(gameName.charAt(2));//Returns the character at the specified index.

console.log(gameName.indexOf('a'));//Returns the position of the first occurrence of a substring.

const newString = gameName.substring(0,4)//Returns the substring at the specified location within a String object.(it only takes positive values starting from 0)
console.log(newString);

const anotherString = gameName.slice(-8,4)//Returns a section of a string.(it can take both positive and negative values)
console.log(anotherString);

const newStringOne = "   sayan   "
console.log(newStringOne);
console.log(newStringOne.trim());//Removes the leading and trailing white space and line terminator characters from a string.

const url = "https://www.linkedin.com/in/sayan-raha/"
console.log(url.replace('sayan-raha','SR'));//Replaces text in a string, using a regular expression or search string.

console.log(url.includes('link'));//Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.

const abc = 'Hi-there-I-am-Sayan-Raha'
console.log(abc.split('-'));//Split a string into substrings using the specified separator and return them as an array.





