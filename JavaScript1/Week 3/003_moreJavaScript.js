// 1 - Create a function that takes 3 arguments and returns the sum of the these arguments:
function threeArgumentsSum(a, b, c) {
    return a + b + c;
}

let argOne = 2;
let argTwo = 9;
let argThree = 1;

console.log(threeArgumentsSum(argOne, argTwo, argThree));
//
//
//
// 2 - Create a function named colorCar that receives a color, and prints out, 'a red car' for example:
function colorCar(AA) {
    return 'a ' + AA + ' car';
}

let someColor = 'vermillion';

console.log(colorCar(someColor));
//
//
//
// 3 - Create an object and a function that takes the object as a parameter
// and prints out all of its properties and values:
let someCoolObject = {
    'car': 'BIG',
    'house': 'SMALL',
    'a cat': 'FLUFFY'
}

function printEverything(object) {
    return Object.getOwnPropertyNames(object);
}

console.log(printEverything(someCoolObject));
//
//
//
// 4 - Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike.
// And prints 'a blue motorbike' for example when called as vehicleType("blue", 2):
function vehicleType(BB, code1) {
    if (typeof BB == "string" &&  code1 == 1) {
        return 'a ' + BB + ' car'; 
    } else if (typeof BB == "string" &&  code1 == 2) {
        return 'a ' + BB + ' motorbike';
    } else {
        return undefined;
    }
}

console.log(vehicleType('red', 2));
//
//
//
// 5 - Can you write the following without the if statement, but with just as a single line with console.log(...);?
// if (3 === 3) {
//   console.log("yes");
// } else {
//   console.log("no");
// }
let hardToReadVar = (3 === 3) ? console.log('yes') : console.log('no');
//
//
//
// 6 - Create a function called vehicle, like before, but takes another parameter
//called age, so that vehicle("blue", 1, 5) prints 'a blue used car':
function vehicle(color, carType, age) {
    if (typeof color == "string" && carType == 1 && age == 0) {
        return 'a ' + color + ' new' + ' car';
    } else if (typeof color == "string" && carType == 1 && age >= 1) {
        return 'a ' + color + ' used' + ' car';
    } else if (typeof color == "string" && carType == 2 && age == 0) {
        return 'a ' + color + ' new' + ' motorbike';
    } else if (typeof color == "string" && carType == 2 && age >= 1) {
        return 'a ' + color + ' used' + ' motorbike';
    } else {
        return undefined;
    }
}

console.log(vehicle('yellow', 2, 0));
//
//
//
// 7 - Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more:
let listOfVehicles = ['motorbike', 'caravan', 'bike'];
//
//
//
// 8 - How do you get the third element from that list?
console.log(listOfVehicles[2]);
//
//
//
// 9 - Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike":
function vehicleNew(colorNew, carTypeNew, ageNew) {
    if (typeof colorNew == "string" && carTypeNew == 1 && ageNew == 0) {
        return 'a ' + colorNew + ' ' + 'new ' + listOfVehicles[0];
    } else if (typeof colorNew == "string" && carTypeNew == 2 && ageNew == 0) {
        return 'a ' + colorNew + ' ' + 'new ' + listOfVehicles[1];
    } else if (typeof colorNew == "string" && carTypeNew == 3 && ageNew == 0) {
        return 'a ' + colorNew + ' ' + 'new ' + listOfVehicles[2];                 
        // new vehicles block ends here
    } else if (typeof colorNew == "string" && carTypeNew == 1 && ageNew >= 1) {
        return 'a ' + colorNew + ' ' + 'used ' + listOfVehicles[0];
    } else if (typeof colorNew == "string" && carTypeNew == 2 && ageNew >= 1) {
        return 'a ' + colorNew + ' ' + 'used ' + listOfVehicles[1];
    } else if (typeof colorNew == "string" && carTypeNew == 3 && ageNew >= 1) {
        return 'a ' + colorNew + ' ' + 'used ' + listOfVehicles[2];
    } else {
        return undefined;
    }
}

console.log(vehicleNew('black', 3, 10));
//
//
//
// 10 - Use the list of vehicles to write an advertisement.
// So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.".
// (Hint: use a for loop.)
let text = 'Amazing Joe\'s Garage, we service cars, ';

function advert() {
    for (let i = 0; i <= listOfVehicles.length; i++) { // THIS IS UNFINISHED!
        return text + listOfVehicles[i] + 's, ';
    }
}
console.log(advert());
//
//
//
// 12 - Create an empty object:
let myObj = { }
//
//
//
// 13 - Create an object that contains the teachers that you have had so far for the different modules:
let teachers = {
    teacherOne: "Baraa",
    teacherTwo: "Seif",
    teacherThree: "Joseph"
}
//
//
//
// 14 - Add a property to the object you just created that contains the languages that they have taught you:
teachers.languages = ["HTML", "CSS", "Java Script"];
console.log(teachers);
//
//
//
// 15 - Write some code to test two arrays for equality using == and ===. Test the following:
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y); // returns FALSE
console.log(x === y); // returns FALSE
console.log(z == y); // returns TRUE
console.log(z == x); // returns FALSE
//
//
//
// 16 - Take a look at the following code:
// Show that changing o2 changes o3 (or not) (YES) and changing o1 changes o3(or not) (NO).
// Does the order that you assign (o3 = o2 or o2 = o3) matter? (YES. o2 = o3 is UNDEFINED)
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
//
//
//
// 17 - What does the following code return? (And why?):
let bar = 42;
console.log(typeof typeof bar);
