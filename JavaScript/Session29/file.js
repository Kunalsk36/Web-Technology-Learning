let cars = "https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json";
console.log(cars);

function fetchData() {
    let data = fetch(cars);
    console.log(data);
    data.then(()=>{
        console.log("Data is coming");
    })
    data.catch(()=>{
        console.log("Error");
    })
}

// fetchData();
let carName = document.getElementById("carName");
async function getData() {
    let carData = await fetch(cars);
    console.log(carData);
    let result = await carData.json();
    console.log(result);
    // for(let i = 0; i < result.Results.length; i++) {
    //     let h2 = document.createElement("h2");
    //     h2.textContent = result.Results[i].Mfr_CommonName;
    //     let ul = document.createElement("ul");
    //     for(let j=0; j<result.Results[i].VehicleTypes.length; j++){
    //         let li = document.createElement("li");
    //         li.textContent = result.Results[i].VehicleTypes[j].Name;
    //         ul.appendChild(li);
    //     }
    //     document.body.appendChild(h2);
    //     document.body.appendChild(ul);
    // }
    result.Results.forEach((ele)=>{
        console.log(ele.Mfr_CommonName);
        carName.innerHTML += ele.Mfr_CommonName + "<br>";
    })
}
getData();