// Arrays
/*
// Arrays is a collection of heterogenius and homogenius data

// Syntax:
let names = [];

// ex:
let names = ["kunal", "nikhil", "tushar"];

let arr = ["kunal","MCA", 23];

// Heterogeneous collection (mixed types)
let mixedArray = [42, "Hello", true, { name: "Alice" }, [1, 2, 3]];

// Homogeneous collection (same type)
let numberArray = [10, 20, 30, 40, 50];

*/

// Define an array by literal
let arr = ["kunal","MCA", 23];
console.log(arr);

let names = ["kunal", "nikhil", "tushar", "abhishekh", "salman", "rohit"];
console.log(names);

// accessing single value
console.log(names[0]); // kunal
console.log(names[4]); // salman

// finding length of array using length
console.log(names.length); // 6

// if we try to access single value from array out of it's length it will show undefined
console.log(names[8]) // undefined

// sorting 
console.log(names.sort()); // ['abhishekh', 'kunal', 'nikhil', 'rohit', 'salman', 'tushar']

// reverse an array
console.log(names.reverse()); // ['tushar', 'salman', 'rohit', 'nikhil', 'kunal', 'abhishekh']

// Array is dynamic in nature
let festivals = ["ganesh chaturthi", "dashera", "diwali", "shimga", "sankranti"];
console.log(festivals);
console.log(festivals[7]);
festivals[7] = "shivratri"
console.log(festivals);
console.log(festivals[7]);

// 2nd way to create array 
// by new constructor

let foods = new Array("Modak", "Gulabjam", "Misal", "Vadapav");
console.log(foods);

let nums = new Array(3, 6, 9, 36, 99);
console.log(nums);

let place = new Array("Ratnagiri");
console.log(place);


// 3rd way to create an array - by declaring the size
let places2 = new Array(15);
console.log(places2);
places2[0] = "ratnagiri";
console.log(places2);

places2[6] = "pune";
places2[12] = "mumbai";
console.log(places2);

places2[20] = "banglore"; // since arrays are dynamic in js we can add value
console.log(places2); 