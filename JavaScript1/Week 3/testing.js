// 10 - Use the list of vehicles to write an advertisement.
// So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.".
// (Hint: use a for loop.)
let text = 'Amazing Joe\'s Garage, we service cars, ';

let listOfVehicles = ['motorbike', 'caravan', 'bike'];

function advert() {
    for (let i = 0; i <= listOfVehicles.length; i++) { // THIS IS UNFINISHED!
        return text + listOfVehicles[i] + 's, ';
    }
}
console.log(advert());