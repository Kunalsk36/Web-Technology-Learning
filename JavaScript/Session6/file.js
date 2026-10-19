let task = function() {
    console.log("Hi I'm Function!");
}
task(); // Hi I'm Function!

// global scope
console.log("This is global scope");

{
    // local scope 
    console.log("This is local scope");
}

// block scope
if(true) {
    console.log("This is block scope");
}

// function scope
function myFunction() {
    console.log("This is function scope");
}
myFunction(); // This is function scope

let place = "pune"; 

function myFunc() {
    let place = "mumbai";
    console.log(place); // mumbai
}

console.log(place); // pune

let task1 = function() {
    let place = "delhi";
    console.log(place); // delhi
    var place1 = "nagpur";
}
// console.log(place1); // ReferenceError: place1 is not defined