let listOfVehicles = ['motorbike', 'caravan', 'bike'];

function vehicleNew1(colorNew, carTypeNew, ageNew) {
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

console.log(vehicleNew1('black', 3, 10));

function vehicleNew (colorNew, carTypeNew, ageNew) {
    let msg = '';
    ageNew >= 1 ? msg = `An used ${colorNew} ${listOfVehicles[carTypeNew -1]}` : `A new ${colorNew} ${listOfVehicles[carTypeNew -1]}`;
    return console.log(msg);
}

vehicleNew('blaccccccccccccccck', 1, 2);