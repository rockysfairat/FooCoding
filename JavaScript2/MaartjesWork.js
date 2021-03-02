const monday = [
    {
      name: 'Write a summary HTML/CSS',
      duration: 180
    },
    {
      name: 'Some web development',
      duration: 120
    },
    {
      name: 'Fix homework for class10',
      duration: 20
    },
    {
      name: 'Talk to a lot of people',
      duration: 1.0
    }
  ];
  
  const tuesday = [
    {
      name: 'Keep writing summary',
      duration: 1.0
    },
    {
      name: 'Some more web development',
      duration: 180
    },
    {
      name: 'Staring out the window',
      duration: 10
    },
    {
      name: 'Talk to a lot of people',
      duration: 1.0
    },
    {
      name: 'Look at application assignments new students',
      duration: 40
    }
  ];


// Storing two arrays into one:
const twoDaysOfWork = monday.concat(tuesday);
console.log(twoDaysOfWork);


// Map the tasks to durations in hours:
const orderTasks = twoDaysOfWork.sort( (a, b) => {
  return a.duration > b.duration ? -1 : 1;
} );
console.table(orderTasks);


// Filter out everything that took less than two hours (i.e., remove from the collection):
const moreThanOneHour = twoDaysOfWork.filter( (e) => {
  return e.duration >= 120;
} );
console.log(moreThanOneHour);

// Multiply the each duration by a per-hour rate for billing (use €20/hour) and sum it all up:
const howMuchIsPayedByTask = moreThanOneHour.map( (e) => {
  return `${(e.duration/60)*20}`;
} );
console.log(howMuchIsPayedByTask);

let totalAmount = 0;
for (let i = 0; i < howMuchIsPayedByTask.length; i++) {
  totalAmount += eval(howMuchIsPayedByTask[i]);
}
console.log(`Total amount is ${totalAmount} euros.`);