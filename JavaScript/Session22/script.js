let form = document.getElementById("form");
let user = document.getElementById("user");
let text = document.getElementById("text");
form.addEventListener("input", (e) => {
    console.log(e);
    e.preventDefault();
    console.log(user.value);
    console.log("Form Submitted");
})

user.addEventListener("focus", ()=>{
    user.style.backgroundColor = "palegreen";
    text.innerHTML = "Please enter valid username";
})

user.addEventListener("blur", ()=>{
    user.style.backgroundColor = "white";
    text.innerHTML = "";
})