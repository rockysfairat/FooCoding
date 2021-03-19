function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {

    const numbers = [];
    for (let i = startIndex; i <= stopIndex; i++) {
        numbers.push(i);
    }
    console.log(numbers);

    numbers.forEach(item => {
        if (item % 3 == 0 && item % 5 == 0) {
            threeCallback(item);
            fiveCallback(item);
        } else if (item % 5 === 0) {
            fiveCallback(item);
        } else if (item % 3 == 0) {
            threeCallback(item);
        }
    });
  }

  let sayThree = (number) => `One can divide ${number} by 3!`;
  let sayFive = (number) => `One can divide ${number} by 5!`;
  
  threeFive(10, 15, sayThree, sayFive);
  
  // Should create an array [10,11,12,12.14,15]
  // and call sayFive, sayThree, sayThree, sayFive
  // please make sure you see why these calls are made before you start coding