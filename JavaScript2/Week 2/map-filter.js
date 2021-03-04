'use strict';

function doubleOddNumbers(numbers) {
  // Replace this comment and the next line with your code
  const isItOdd = numbers.filter( (e) => e % 2 !== 0);

  numbers = isItOdd.map( (o) => o * 2);

  return numbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};