/**
 * Event Deligation - 
 * writing or adding an event to the parent instead of adding to the child seperately.
 */

let ul = document.getElementById("list");
let content = document.getElementById("content");
ul.addEventListener("click", (e) => {
    console.log(e.target);
    if(e.target.innerHTML === "HTML" && e.target.tagName === "LI") {
        e.target.style.backgroundColor = "yellow";
    }
    content.innerHTML = e.target.textContent;
})

/**
 * string methods:
 */

let str = "Kunal Kavathekar";
console.log(str.charAt(0)); // K
console.log(str.concat(" is a Software Developer")) // Kunal Kavathekar is a Software Developer
console.log(str.endsWith("kar")); // true
console.log(str.startsWith("K")) // true // case-sensitive k and K are treated different
console.log(str.includes("Kunal")); // true
console.log(str.indexOf("l")); // 4
console.log(str.lastIndexOf("k")); // 13
console.log(str.replace("Kavathekar", "K")); // Kunal K // replace() will replace only the first one
console.log(str.replaceAll("K", "k")) // kunal kavathekar // replaceAll() will replace all
console.log(str) // Kunal Kavathekar
console.log(str.trim()); // if we have extra spaces then that will be removed from both start and end // Kunal Kavathekar
console.log(str.trimStart()) // removed spaces from start only
console.log(str.trimEnd()) // removed spaces from end only
console.log(str.toUpperCase()) // KUNAL KAVATHEKAR
console.log(str.toLowerCase()) // kunal kavathekar
console.log(str.repeat(3)); // repeate the string multiple times // Kunal KavathekarKunal KavathekarKunal Kavathekar

console.log(str.length); // 16 // it is a property not a string method.