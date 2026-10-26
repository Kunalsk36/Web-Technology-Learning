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

// nestead objects
let objEmps = {
    emp1 : {
        id : 1,
        ename : "kunal",
        gender : "male"
    },
    emp2 : {
        id : 2,
        ename : "nikhil",
        gender : "male"
    },
    emp3 : {
        id : 3,
        ename : "saloni",
        gender : "female"
    }
};

console.log("\n\n");
console.log(objEmps);
console.log("\n\n");
console.log(objEmps.emp1);
console.log("\n\n");
console.log(Object.values(objEmps));

let femaleEmps = Object.values(objEmps).filter((e, i) => {return e.gender == "female"});
console.log(femaleEmps);

let maleEmps = Object.values(objEmps).map((e, i) => {if(e.gender == "male") return e});
console.log(maleEmps);

// Array of object
let arrObjEmp = [
    {
        id : 1,
        ename : "tushar",
        gender : "male"
    },
    {
        id : 2,
        ename : "abhishekh",
        gender : "male"
    },
    {
        id : 3,
        ename : "trupti",
        gender : "female"
    }
]
console.log(arrObjEmp);
console.log(arrObjEmp[0]);

let maleEmps2 = arrObjEmp.filter((e) => {return e.gender == "male"});
console.log(maleEmps2);


// Task
/**
 * Create an 10 array of object (employees) which includes 
 * Name, age, salary, department, hobbies, place, eid, company, gender, isMarried
 * 
 * 1. Extract the employees with same age
 * 2. Extract the employees whos department is same
 * 3. Increase the salary by 15% of employees whos having more than 50,000
 * 4. Extract the married employees
 * 5. Extact the all male employees and give them 25% of hike
 * 6. Extract the all female employees and deduct their salaries by 25% and afterwards increase by 50%.
 * 7. add the experience key to the all employees based on their salary
 * 8. delete all married female employees
 * 9. Sort the all employees based on their experienced
 * 10. Sort the employees in reversed orderd based on their id
 */