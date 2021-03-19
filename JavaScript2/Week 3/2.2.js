function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {

    const numbers = [];
    for (let i = startIndex; i <= stopIndex; i++) {
        numbers.push(i);
    }
    console.log(numbers);

    for (let j = 0; j < numbers.length; j++) {
        if (threeCallback % 3 == 0 && numbers[j] == threeCallback) {
            sayThree();
        }
        if(fiveCallback % 5 == 0 && numbers[j] == fiveCallback) {
            sayFive();
        }
    }
  }

  const sayThree = () => 'One can divide a number by 3!';
  const sayFive = () => 'One can divide a number by 5!';
  
  threeFive(10, 15, sayThree, sayFive);
  
  // Should create an array [10,11,12,12.14,15]
  // and call sayFive, sayThree, sayThree, sayFive
  // please make sure you see why these calls are made before you start coding