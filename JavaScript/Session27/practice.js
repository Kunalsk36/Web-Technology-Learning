let dataMsg = document.getElementById("dataMsg");

let promise = fetch("./testApi.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        dataMsg.textContent = JSON.stringify(data, null, 2);
    });