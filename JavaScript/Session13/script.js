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

let d = document.getElementsByTagName("div");
var p1 = document.querySelector("p");
let h1e = document.querySelector("h1");
let h2e = document.querySelectorAll("h2");
let btn = document.querySelector("button");

d[0].style.backgroundColor = "red";
p1.style.color = "blue";
p1.style.fontSize = "20px";
h2e[1].style.color = "orange";
h2e[0].style.backgroundColor = "green";

btn.addEventListener("click", () => {
    h1e.style.color = "red";
})

// target d and move it randomly on the screen when hover on it
d[0].addEventListener("mouseover", () => {
    d[0].style.left = Math.random() * (window.innerWidth - 100) + "px";
    d[0].style.top = Math.random() * (window.innerHeight - 100) + "px";
})