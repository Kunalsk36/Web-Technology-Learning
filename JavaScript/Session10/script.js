let names = ["vaishnavi", "Dhanashri", "heer", "kranti", "tejaswi", "vaishnavi"];

function printI(ele) {
    console.log(ele);
    return ele.endsWith("i");
}

let iNames = names.filter((printI));
console.log(iNames); // ['vaishnavi', 'Dhanashri', 'kranti', 'tejaswi', 'vaishnavi']

let iNames2 = iNames.filter((ele) => {
    return ele.includes("v");
})
console.log(iNames2); // ['vaishnavi', 'vaishnavi']

// more shorter syntax for single line 
let iNames3 = iNames.filter(ele => ele.startsWith("k"));
console.log(iNames3); // ['kranti']


// map() - It is array iteration method which is used to pass condition on each and every array element and gives result to every array element

let nums = [10, 20, 36, 45, 53, 66];
console.log(nums); // [10, 20, 36, 45, 53, 66]

let plus10 = nums.map((e) => e + 10);
console.log(plus10); // [20, 30, 46, 55, 63, 76]

console.log(
    nums.map(e => e % 2 == 0)
); // [true, true, true, false, false, true]


// forEach() 
nums.forEach((ele) => {
    console.log(ele);
})

nums.forEach((e, i, arr) => {
    console.log(`Value : ${e} || Index : ${i} || Array : ${arr}`);
})

nums.forEach(e => console.log(e*10));

// reduce() and reduceRight() - 
let sum = nums.reduce((a, b) => a+b);
console.log(`sum of array elements is ${sum}`);

let sum2 = nums.reduceRight((a, b) => a+b);
console.log(`sum of array elements using reduceRight() is ${sum2}`);

let sub = nums.reduce((a, b) => a-b);
console.log(`sub of array elements is ${sub}`);

let sub2 = nums.reduceRight((a, b) => a-b);
console.log(`sub of array elements using reduceRight() is ${sub2}`);

// the reduceRight() will work from right to left 
// the reduce() will work from left to right