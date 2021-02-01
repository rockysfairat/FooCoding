// 8.1 - First declare at least four variables and assign them different data types:
let firstVar = 20;
let secondVar = "'This is the second var and it's a string'";
let thirdVar = ['orange', 'apple', 'kiwi', 'pear', 'coconut'];
let fourthVar = true;


// 8.2 - For each variable write a console.log statement that logs the value:
console.log('The value of my firstVar is ' + firstVar);
console.log('The value of my secondVar is ' + secondVar);
console.log('The value of my thirdVar is ' + thirdVar);
console.log('The value of my fourthVar is ' + fourthVar);


// 8.3 - Now write a console.log statement wherein you first explain
// in words what you think the type of your variables is:
console.log('My firstVar is a NUMBER');
console.log('My secondVAr is a STRING');
console.log('My thirdVar is an ARRAY');
console.log('My fourthVar is a BOOLEAN');


// 8.4 - Now use typeof to log the actual type of your variables:
console.log(typeof firstVar);
console.log(typeof secondVar);
console.log(typeof thirdVar);
console.log(typeof fourthVar);


// 8.5 - Now compare the types of your different variables with one another.
// 8.6 - Make sure to also show a message when the variables
// you are comparing are not the same type:
function compareMyVars(a, b) {
    if (typeof a === typeof b) {
        return console.log('SAME TYPE');
    } else {
        return console.log('NOT SAME TYPE');
    }
}

let x = compareMyVars(firstVar, secondVar); // returns message 'NOT SAME TYPE'

console.log(x);