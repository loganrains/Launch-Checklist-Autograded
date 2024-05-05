// const { formSubmission } = require("./scriptHelper");    Did I write this

window.addEventListener("load", function() {

    // console.log("Page fully loaded");
    
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        console.log("Form Submission Detected");
        console.log(document.querySelector("input[name=cargoMass]").value);
        formSubmission(document, document.querySelector("#faultyItems"), document.querySelector("input[name=pilotName]").value, document.querySelector("input[name=copilotName]").value, document.querySelector("input[name=fuelLevel]").value, document.querySelector("input[name=cargoMass]").value);
    
    }); // Rewrite fS function call so it isn't so long by letting variables

    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    // })
    
});

