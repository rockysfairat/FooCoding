// 5.1 - Declare a variable z and assign the number 7.25 to it:
let z = 7.25;


// 5.2 - console.log z:
console.log(z);


// 5.3 - Declare another variable a that has the value of z but rounded to the nearest integer:
let a = Math.floor(z); // z must be equal to 7


// 5.4 - console.log a:
console.log(a);


let x = 'Whatever';

// 5.5 - So now we have z and a find a way to compare the two values
// and store the highest of the two in a new variable:
function superNumber(a, z) {
    if (a > z) {
        return a;
    } else {
        return z;
    }
}

x = superNumber(a, z);


// 5.6 - console.log the highest value:
console.log(x);