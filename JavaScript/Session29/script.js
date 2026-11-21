async function fetchData() {
    let data = await fetch("https://catfact.ninja/fact");
    let result = await data.json();
    let fact = document.createElement("p");
    fact.textContent = result.fact;
    document.body.appendChild(fact);
}

async function fetchCatImages() {
    let imgs = await fetch("https://api.thecatapi.com/v1/images/search")
    let result = await imgs.json()
    let img = document.createElement("img");
    img.src = result[0].url;
    img.alt = "cat-image";
    document.body.appendChild(img);
}

let getFactBtn = document.getElementById("getFact");
let getImageBtn = document.getElementById("getImg");
getFactBtn.addEventListener("click", fetchData);
getImageBtn.addEventListener("click", fetchCatImages)