require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    
    let missionDiv = document.querySelector("div[id=missionTarget]");

    missionDiv.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `;
    
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
        return "Is a Number";

    } else if (isNaN(testInput)) {
        return "Not a Number";

    }
}

 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    

    if (validateInput(pilot) == "Empty" || validateInput(copilot) == "Empty" || validateInput(fuelLevel) == "Empty" || validateInput(cargoLevel) == "Empty") {
        window.alert("All fields are required");
          
    } else if (validateInput(pilot) == "Is a Number" || validateInput(copilot) == "Is a Number") {
        window.alert("Incorrect Data Type Submitted");

    } else if (validateInput(fuelLevel) == "Not a Number" || validateInput(cargoLevel) == "Not a Number") {
        window.alert("Incorrect Data Type Submitted");

    }

    //Updating List
    list.style="visibility: visible";
    document.querySelector("li[id=pilotStatus]").innerHTML = `Pilot ${pilot} is ready for launch`;
    document.querySelector("li[id=pilotStatus]").style="color: green";
    document.querySelector("li[id=copilotStatus]").innerHTML = `Co-pilot ${copilot} is ready for launch`;
    document.querySelector("li[id=copilotStatus]").style="color: green";


    if (fuelLevel >= 10000 && cargoLevel <= 10000) {

        document.querySelector("h2[id=launchStatus]").innerHTML = "Shuttle is Ready for Launch";
        document.querySelector("h2[id=launchStatus]").style="color: green";
        document.querySelector("li[id=fuelStatus]").innerHTML = "Fuel level high enough for launch"
        document.querySelector("li[id=fuelStatus]").style="color: green";
        document.querySelector("li[id=cargoStatus]").innerHTML = "Cargo mass low enough for launch"
        document.querySelector("li[id=cargoStatus]").style="color: green";

    } else if (fuelLevel >= 10000 && cargoLevel > 10000) {

        document.querySelector("h2[id=launchStatus]").innerHTML = "Shuttle Not Ready for Launch";
        document.querySelector("h2[id=launchStatus]").style="color: red";
        document.querySelector("li[id=fuelStatus]").innerHTML = "Fuel level high enough for launch"
        document.querySelector("li[id=fuelStatus]").style="color: green";
        document.querySelector("li[id=cargoStatus]").innerHTML = "Cargo mass too heavy for launch";
        document.querySelector("li[id=cargoStatus]").style="color: red";

    } else if (fuelLevel < 10000 && cargoLevel <= 10000) {

        document.querySelector("h2[id=launchStatus]").innerHTML = "Shuttle Not Ready for Launch";
        document.querySelector("h2[id=launchStatus]").style="color: red";
        document.querySelector("li[id=fuelStatus]").innerHTML = "Fuel level too low for launch";
        document.querySelector("li[id=fuelStatus]").style="color: red";
        document.querySelector("li[id=cargoStatus]").innerHTML = "Cargo mass low enough for launch"
        document.querySelector("li[id=cargoStatus]").style="color: green";

    } else if (fuelLevel < 10000 && cargoLevel > 10000) {

        document.querySelector("h2[id=launchStatus]").innerHTML = "Shuttle Not Ready for Launch";
        document.querySelector("h2[id=launchStatus]").style="color: red";
        document.querySelector("li[id=fuelStatus]").innerHTML = "Fuel level too low for launch";
        document.querySelector("li[id=fuelStatus]").style="color: red";
        document.querySelector("li[id=cargoStatus]").innerHTML = "Cargo mass too heavy for launch";
        document.querySelector("li[id=cargoStatus]").style="color: red";

    }

}
 
async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
    });
        
     return planetsReturned; 
}
 
function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*6)];
}
 
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;