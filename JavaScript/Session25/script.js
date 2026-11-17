let date = new Date();

console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMilliseconds());
console.log(date.getMinutes());
console.log(date.getMonth());
console.log(date.getSeconds());
console.log(date.getTime());
console.log(date.toJSON());
console.log(date.toString());

let calcAgeBtn = document.getElementById("calcAge");
let ageResult = document.getElementById("ageResult");

function calculateAge() {
    let birthYear = prompt("Enter you birth year : ");
    ageResult.innerHTML = `Your age is ${date.getFullYear() - birthYear}` 
}

calcAgeBtn.addEventListener("click", calculateAge);

date.setDate(20);
console.log(date);
date.setFullYear(2030);
console.log(date);
date.setMonth(5);
console.log(date);
date.setHours(3);
console.log(date);

// Math Methods

console.log(Math.round(4.0)); // 4
console.log(Math.round(4.2)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.8)); // 5

console.log(Math.floor(4.2)) // 4
console.log(Math.floor(4.5)) // 4
console.log(Math.floor(4.7)) // 4
console.log(Math.floor(4.0)) // 4

console.log(Math.ceil(8.2)) // 9
console.log(Math.ceil(8.5)) // 9
console.log(Math.ceil(8.8)) // 9
console.log(Math.ceil(8.0)) // 8

console.log(Math.random())
console.log(Math.random()*10000);
console.log(Math.trunc(Math.random()*10000));

console.log(Math.sqrt(49)) // 7