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