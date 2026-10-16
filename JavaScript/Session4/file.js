var age;
console.log(age);
age = 23;
console.log(age);

// Globa or public variable
place = "Ratnagiri";
console.log(place); // can be access shows Ratnagiri it will be automatically declared with var
console.log(window.place);
console.log(window);

// Hoisting with name identifier
console.log(name); // kunal // It is only posible when variable declared with var and identifier is name // name is deprecated
var name = "kunal";
console.log(name); // kunal

// console.log(name); // Uncaught ReferenceError: Cannot access 'name' before initialization
// let name = "Nikhil";
// console.log(name); // Nikhil

// Hoisting with another identifier
console.log(word); // undefined // with another identifier (other than name) if we try to access var variable before it initialization it will show undefined.
var word = "JavaScript";
console.log(word); // JavaScript


// Hoisting is not possible with let and const:
// console.log(place2); // Uncaught ReferenceError: Cannot access 'place2' before initialization
let place2 = "pune";
console.log(place2); // pune
// when variable declared with let or const they will be in TDZ - temporal dead zone before initialization

// can't access with window object
let name2 = "Tushar";
console.log(name2); // Tushar
console.log(window.name2); // undefined

var name3 = "Valmik";
console.log(name3); // Valmik
console.log(window.name3); // Valmik

// Global variable
let name4 = "Aryan";
console.log(name4);
if(true) {
    console.log(name4);
    name4 = "Rahul";
}
console.log(name4);

// Global variable
let name5 = "Aryan";
console.log(name5); // Aryan
if(true) {
    // console.log(name5); // Uncaught ReferenceError: Cannot access 'name5' before initialization
    let name5 = "Rahul";
}
console.log(name5); // Aryan