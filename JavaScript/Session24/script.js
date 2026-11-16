/**
 * Event Deligation - 
 * writing or adding an event to the parent instead of adding to the child seperately.
 */

let ul = document.getElementById("list");
let content = document.getElementById("content");
ul.addEventListener("click", (e) => {
    console.log(e.target);
    if(e.target.innerHTML === "HTML" && e.target.tagName === "LI") {
        e.target.style.backgroundColor = "yellow";
    }
    content.innerHTML = e.target.textContent;
})