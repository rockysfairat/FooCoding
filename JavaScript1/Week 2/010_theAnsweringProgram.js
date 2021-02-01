// 10.1 - Can you store multiple types in an array?
// Numbers and strings? Make an example that illustrates your answer.
let myArray = [16, 'Here is some cool string', 'And here\'s another string'];
console.log(myArray);


// 10.2 - Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0?
// How can you test this?
function compareInfinities(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}

let x = compareInfinities(6/0, 10/0);
console.log(x); // logs true


// 10.3 - Add console.log statements to the above program in which you show
// that you understand the concepts (just like you've done in the above assignments).
x = compareInfinities(2, 3);
console.log(x);