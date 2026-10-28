// DOM
/**
 * DOM - Document Object Model
 * Tree like structure of HTML element
 * It is programming interface of HTML
 * It is used to manipulate or change one HTML to another HTML programmatically.
 */

/**
 * DOM methods to target HTML elements: 
 * ( 5 Methods )
 * 1. getElementById() - target HTML element by id
 * 2. getElementsByTagName() - target HTML element by tag name
 * 3. getElementsByClassName() - target HTML element by class name
 * 4. querySelector() - target HTML element by CSS selector
 * 5. querySelectorAll() - target all HTML elements by CSS selector
 */

// 1. getElementById()
let fest = document.getElementById("fest");
console.log(fest);

// 2. getElementByClassName()
let movie = document.getElementsByClassName("movie"); // this return HTMLCollection
console.log(movie) 

// 3. getElementsByTagName()
let pTag = document.getElementsByTagName("p");
console.log(pTag);

// 4. querySelector()
let fest2 = document.querySelector('#fest2');
console.log(fest2)

// 5. querySelectorAll()
let foods = document.querySelectorAll(".food");
console.log(foods); // this return a NodeList