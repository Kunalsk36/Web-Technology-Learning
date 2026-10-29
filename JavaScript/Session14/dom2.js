let heading1 = document.getElementById("heading1");
heading1.style.color = "orange";
heading1.style.backgroundColor = "red";
heading1.style.padding = "20px";

let movies = document.getElementsByClassName("movies");
movies[0].style.color = "red";
movies[movies.length-1].style.backgroundColor = "black";
movies[movies.length-1].style.color = "#ffffff";
// movies.forEach(ele => ele.style.color = "red"); // this will not work // Uncaught TypeError: movies.forEach is not a function


let movies2 = document.querySelectorAll(".movies2");
movies2.forEach(element => {
    element.style.backgroundColor = "yellow";
    element.style.color = "navy";
    element.style.padding = "20px";
});

// Nodelist vs HTML list

// createElement() || innerText || innerHTML
let h1Tag = document.createElement("h1");
let h1Tag2 = document.createElement("h1");
h1Tag.innerText = "This is appended child";
h1Tag2.innerHTML = "This is appended child 2";
document.body.appendChild(h1Tag);
document.body.appendChild(h1Tag2);

let img = document.createElement("img");
img.src = "../../HTML/Assests/man-with-glasses.png";
img.setAttribute("alt", "man-with-glasses");
document.body.appendChild(img);