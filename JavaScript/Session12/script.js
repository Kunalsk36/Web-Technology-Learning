/**
 *  26/10/2026 
 * 
 *  Object - 
 * 
 *  Methods of Object: 
 *  
 *  - keys() - keys method return the keys of respective object
 *  - values() - this method return the values of respective object
 *  - entries() - this method return the both key vlue data of respective object
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
console.log("isFrozen", " - ", Object.isFrozen(obj));
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

let emp = {
    id : 1,
    ename : "kunal",
    salary : 350000,
    address : {
        city : "Ratnagiri",
        state : "maharashtra"
    }
}
console.log(emp);

console.log("salary" in emp); // true
console.log("age" in emp); // false
console.log("city" in emp); // fasle
console.log("city" in emp.address); // true

// assign() - This method is used to add more number properties inside object (we can update as well)
Object.assign(emp, {
    company : "MNC",
    age : 23,
    id: 36
});
console.log(emp);

