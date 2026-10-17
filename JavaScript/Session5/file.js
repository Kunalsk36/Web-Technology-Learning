// Named Function declaration
function add(n1, n2) {
    console.log(n1+n2);
}

add(10, 20); // 30
add(10); // NaN // Not a Number - Special type of output appears when the parameter supposed to receive or accept the interger value but it won't 
console.log(typeof NaN) // number
add(10, "30"); // 1030 
add("20", 40); //2040
add(20, true); // 21
add(20, false); // 20

console.log(sub(20, 6)); // 14 // we can call before 
function sub (n1, n2) {
    return n1 - n2;
}
console.log(sub(10, 5)); // 5
console.log(sub(2, 5)); // 3
console.log(sub(10)); // NaN
console.log(sub(10, "6")); // 4
console.log(sub("10", "7")); // 3
console.log(sub("10", 3)); // 7


