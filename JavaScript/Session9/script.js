let nums = [10, 20, 30, 40, 50];
console.log(nums);
let mulNums = [];
nums.forEach((i) => {
  mulNums.push(i * 10);
});
console.log(mulNums);

// Array Iteration Methods -
/**
 * filter() - most used
 * map() - most used
 * forEach()
 * some()
 * every()
 * reduce()
 * reduceRight()
 */

let nums1 = [2, 4, 5, 1, 5, 12, 3, 53];

nums1.filter((i) => {
    console.log(i);
});

let evenNums = nums1.filter((i) => {
  return i % 2 == 0;
});
console.log(evenNums);

let oddNums = nums1.filter((i) => {
    return i % 2 != 0;
});
console.log(oddNums);

// Higher order function - A function which accept another function as an argument is known as Higher order function.
// e.g. - filter(), map(), reduce(), forEach(), etc.

// callback function - A function which goes as an argument is known as callback function 
// e.g arrow function

// =================== TASK =====================
// take one array of string, numbers and perform 7 types of operations on these array with the help of filter method.
let arr = ["kunal", "nikhil", 3, 6, 24, 49, 36, "tushar", "salman", 90, 200, 300, 8439];

let res1 = arr.filter((i) => {
    return typeof(i) == "string";
})
console.log(res1);

let res2 = arr.filter((i) => {
    return typeof(i) == "number"
})
console.log(res2)

let res3 = arr.filter((i) => {
    return i % 2 == 0;
})
console.log(res3);

let res4 = arr.filter((i) => {
    return i % 2 != 0 && typeof(i) == "number";
})
console.log(res4);

let res5 = arr.filter((i) => {
    return i > 100;
});
console.log(res5);

let res6 = arr.filter((i) => {
    return i[0] == 'k' || i[0] == 't';
})
console.log(res6);

let res7 = arr.filter((i) => {
    return i <= 49;
})
console.log(res7);
let name1 = "kunal";
console.log(name1.toUpperCase())

let names = ["kunal", "tushar", "abhishekh", "salman", "rahul"];
let res8 = names.filter((i) => {
    return i.length == 5;
})
console.log(res8);