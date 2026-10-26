/**
 *  26/10/2026 
 * 
 *  Object - 
 * 
 *  Methods of Object: 
 *  
 *  - keys()
 * 
 */

let obj = {
    id : 1,
    name : "Kunal"
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log("isFrozen() - "+Object.isFrozen(obj)); // isFrozen() - false
obj.id = 2;
// delete obj.id
console.log(obj);
Object.freeze(obj);  // freeze the object
obj.age = 24; // add
obj.id = 3; // update
delete obj.id; // delete
// add, update and delete won't work because object is freeze
console.log(obj);

let obj2 = {
    id : 2,
    name : "Nikhil"
}
console.log(obj2);
console.log("isSealed() - "+Object.isSealed(obj2)); // isSealed() - false
Object.seal(obj2);
console.log("isSealed() - "+Object.isSealed(obj2)); // isSealed() - true
obj2.id = 4; // update possiible with seal
obj2.age = 25; // add is not possible cannot add new property if sealed
delete obj2.id; // delete is also not possible
console.log(obj2);
