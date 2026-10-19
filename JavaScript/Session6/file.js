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

console.log("\n\n")
// Lexical Scope chain or Closure
// Accessing property or variable inside child function.
function parent() {
    let place = "Pune";
    console.log(place);
    
    function child(){
        console.log("child function");
        console.log(place);
    }
    child();
}
parent();

// Arrow Function
// Arrow function is known for it's shorter syntax
// It is introduced in ES6 concept
// Most Used JS function in frontend

// Syntax:
// () => {}

let task2 = () => {
    console.log("Hello Kunal!");
}

task2();