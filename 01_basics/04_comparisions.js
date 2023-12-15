//  Comparison/Relational Operators

/*

        > (greater than)
        >= (greater than equal to)
        < (less than)
        <= (less than equal to)
        == (equal to) 
        != (not equal to)

*/

// Note , whenever you compare 2 values make sure that the datatype of the values are same



// tricky (always avoid these type of conversion of nulls and undefined)

console.log(null > 0);// false
console.log(null == 0);// false
console.log(null >= 0);// true
/* 
    The reason is that an equality check == and comparisons > , < , >= , <= work differently.

    Comparisons convert null to a number treating it as 0.

    That's why, null >= 0 is true and null > 0 is false
*/


// difference btw == and ===

// == (compares only the values)

// === (compares values as well as their datatypes) strict check

console.log("2" == 2); // true
console.log("2" === 2); // false


