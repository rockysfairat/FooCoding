// With for loop:
let repeatStringNumTimes = (str, num) => {

    let myString = '';
    for (let i = 0; i < num; i++) {
      myString += str;
    }

    if (num <= 0) {
      console.log('');
    }

  console.log(myString);
}
repeatStringNumTimes("abc", 3);


//With while loop:
let repeatStringNumTimes = (str, num) => {
    let myString = '';
    
    let i = 0;
    while (i < num) {
      myString += str;
      i++;
    }
  
    if (num <= 0) {
      console.log('');
    }
  console.log(myString);
}
repeatStringNumTimes("a", -2);


//With do...while loop:
let repeatStringNumTimes = (str, num) => {
    let myString = '';
  
    let i = 0;
  
    if (num <= 0) {
      console.log('');
      } else {
            do {
            myString += str;
            i++
        }
      while (i < num);
    }
  
  console.log(myString);
}
repeatStringNumTimes("a", 3);