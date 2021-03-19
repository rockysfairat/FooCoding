// Write a function that would allow you to do this:

const addSix = createBase(6);

let createBase = (base) => {
    return function(num) {
        return base + num;
    }
}

addSix(10); // returns 16
addSix(21); // returns 27