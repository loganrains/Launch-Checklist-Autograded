require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}
 
function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";

    } else if (!(isNaN(testInput))) {
        return "Number";

    } else if (isNaN(testInput)) {
        return "Not a Number";

    }
}

 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) == "Empty" || validateInput(copilot) == "Empty" || validateInput(fuelLevel) == "Empty" || validateInput(cargoLevel) == "Empty") {
        window.alert("All fields are required");
        event.preventDefault();
          
    }

    if (validateInput(pilot) == "Number" || validateInput(copilot) == "Number") {
        window.alert("Incorrect Data Type Submitted");
        event.preventDefault();

    } else if (validateInput(fuelLevel) == "Not a Number" || validateInput(cargoLevel) == "Not a Number") {
        window.alert("Incorrect Data Type Submitted");
        event.preventDefault();

    }

    return 

    // Incomplete 5/3
}
 
async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
        });
 
     return planetsReturned;
}
 
function pickPlanet(planets) {

}
 
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;