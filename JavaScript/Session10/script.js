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
