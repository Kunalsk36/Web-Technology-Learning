let bodyy = document.getElementById("bodyy");
let scrollText = document.getElementById("scrollText");
scrollText.innerHTML = window.scrollY;
let scrollSection = document.getElementById("scrollSection");
window.addEventListener("scroll", ()=>{ // scroll is a browser event that is triggered when the user scrolls the page
    console.log(window.scrollY);
    scrollText.innerHTML = window.scrollY;
    let img = document.createElement("img");
    
    if(window.scrollY > 700) {
        img.src = "";
        scrollSection.appendChild(img);
    }
    if(window.scrollY >= 500 && window.scrollY <= 700) {
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh9onNFsekQyBHliEfvlAsHu2MfpkyR6MzDbUVGUwN0g&s=10";
        img.width = 300;
        scrollSection.appendChild(img);
    }
})

let audio = document.getElementById("audio");
let text = document.getElementById("text");
audio.addEventListener("play", ()=>{
    text.innerHTML = "song is playing";
    document.body.style.backgroundColor="green";
    document.body.style.color = "white";
})

audio.addEventListener("pause", ()=>{
    text.innerHTML = "song is paused";
    document.body.style.backgroundColor="red";
    document.body.style.color = "white";
})

// form handling
let myForm = document.getElementById("myForm");
let input = document.getElementById("data");
let submitBtn = document.getElementById("submitBtn");
myForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(input.value);
    console.log("Form Submitted!");
    e.target.reset();
})