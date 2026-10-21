// slice()
let persons = ["kunal", "nikhil", "tushar", "abhishekh", "salman", "rohit"];
console.log(persons);

console.log(persons.slice(0, 4)); // ['kunal', 'nikhil', 'tushar', 'abhishekh']
console.log(persons.slice(4)); // ['salman', 'rohit']
console.log(persons.slice(3, 5)); // ['abhishekh', 'salman']

// splice()
let places = ["ratnagiri", "pune", "mumbai", "kolhapur", "satara"];
console.log(places); // ['ratnagiri', 'pune', 'mumbai', 'kolhapur', 'satara']

// adding array elements to the array:
places.splice(3, 0, "banglore");
console.log(places); // ['ratnagiri', 'pune', 'mumbai', 'banglore', 'kolhapur', 'satara']

// deleting array elements
places.splice(4);
console.log(places); // ['ratnagiri', 'pune', 'mumbai', 'banglore']

places.splice(2, 1); 
console.log(places); // ['ratnagiri', 'pune', 'banglore']

// replacing array element
places.splice(2, 1, "goa");
console.log(places); // ['ratnagiri', 'pune', 'goa']

places.splice(2, 1, "goa", "chennai");
console.log(places); // ['ratnagiri', 'pune', 'goa', 'chennai']

let arr = ["java", "python"];
let arr2 = ["webtech", "sql"];
let nums = [2, 4, 5, 6, 7, 9];
console.log(nums);
nums.splice(2, 0, arr);
console.log(nums);
nums.splice(4, 0, arr2[0], arr2[1]);
console.log(nums);


// Nested Array
let trainers = ["vijay", "harsha", "rohit", "girish", ["sql", "java", "webtech", "apti"]];
console.log(trainers); // ['vijay', 'harsha', 'rohit', 'girish', Array(4)]
console.log(trainers[4]); // ['sql', 'java', 'webtech', 'apti']
console.log(trainers[2]); // rohit
console.log(trainers[4][2]); // webtech