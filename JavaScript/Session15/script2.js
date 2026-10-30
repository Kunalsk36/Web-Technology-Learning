// className or TagName return HTML collection // it looks like an array // html collection is collection of elements
// querySelectorAll() return NodeList // it looks partially like a array where you can use forEach for iteration // node list is a collection of every node or each node

// querySelector - target only single element 
// querySelectorAll() - - target all elements

// some() and every()
// some() - check if any one element satisfies condition then return true else false
// every() - checks if all elements satisfies the condition return true else false
let arr = [19, 232,54,5123];
console.log(arr.some(e => e > 100)); // true
console.log(arr.every(e => e > 100)); // false

let arr2 = [10,20,30,40,50];
console.log(arr2.some(e => e > 100)); // false
console.log(arr2.every(e => e >= 10)); // true