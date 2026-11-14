// Event Propagation
/**
 *  Event Propagation : It is a process of event that how event travels throughout DOM tree.
 * 
 * It has three phases:
 * 1. bubbling phase
 * 2. target phase
 * 3. capturing phase
 * 
 * 1. Bubbling Phase : In this phase event starts from child to parent. It is default phase of event propagation.
 * 2. Target Phase : In this phase event is on target element.
 * 3. Capturing Phase : In this phase event starts from parent to child.
 */

let parent = document.getElementById("parent");
let child = document.getElementById("child");
let grandchild = document.getElementById("grandchild");

parent.addEventListener("click", () => {
    parent.style.backgroundColor = "red";
    console.log("Parent Container triggered");
})

child.addEventListener("click", () => {
    child.style.backgroundColor = "green";
    console.log("Child Container triggered");
})

grandchild.addEventListener("click", () => {
    grandchild.style.backgroundColor = "blue";
    console.log("GrandChild Container triggered");
})