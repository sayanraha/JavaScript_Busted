// Dates & Time (*** One of the Complex topics ***)

let myDate = new Date()

console.log(myDate);// o/p -> 2023-12-15T16:13:41.040Z

console.log(myDate.toString());//Returns a string representation of a date. The format of the string depends on the locale.

// o/p-> Fri Dec 15 2023 21:44:32 GMT+0530 (India Standard Time)

console.log(myDate.toISOString());//Returns a date as a string value in ISO format.

// o/p-> 2023-12-15T16:15:43.897Z

console.log(myDate.toDateString());//Returns a date as a string value.

//o/p -> Fri Dec 15 2023

console.log(myDate.toLocaleString());//Converts a date and time to a string by using the current or specified locale.

// o/p -> 15/12/2023, 9:48:29 pm

console.log(typeof myDate);// it is an object

// custom dates 

// let myCreateDate = new Date(2023,0,23)
// let myCreateDate = new Date(2023,0,23,5,3)
let myCreateDate = new Date("2023-01-14")
//console.log(myCreateDate.toLocaleString());





let myTimeStamp = Date.now() //Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).

console.log(myTimeStamp);
console.log(myCreateDate.getTime());//Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.


// for getting values in seconds

console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate);

console.log(newDate.getMonth() + 1);//Gets the month, using local time.

console.log(newDate.getDay());//Gets the day of the week, using local time.