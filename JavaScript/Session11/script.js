let stud = {
    sid : 1,
    sname : "kunal",
    isGraduated : true,
    marks : [80, 90, 84, 96, 89],
    scolarship : 18000,
    age : Symbol(23)
}
console.log(stud);

let stud2 = {
    sid : 2,
    sname : "nikhil",
    isGraduated : true,
    marks : [84, 95, 80, 92, 75],
    scolarship : 18000,
    age : Symbol(23)
}
console.log(stud2);

// accessing object property - dot notation with key
console.log(stud.sname);
console.log(stud.marks);
console.log(stud.marks[3]);


console.log(stud.scolarship == stud2.scolarship); // true - because we stored with number datatype.

console.log(stud.age == stud2.age); // false - because we stored with Symbol datatype

// Symbol() - It is primitive object datatype which stores examct same values uniquely.


let val1 = 36;
let val2 = "36"

// double equal to (==) - It checks only the value of the variable and ignores the datatype.
console.log(val1 == val2); // true

 // triple equal to (===) - It checks both value and datatype of the variable.
console.log(val1 === val2); // false

let emp = {
    ename : "Kunal",
    salary : 30000,
    hobbies : ["watching movies", "listning musics"],
    // nested object
    address : {
        city : "ratnagiri",
        state : "maharashtra"
    }
}

console.log(emp);

// accessing object property
console.log(emp.ename);
console.log(emp.address.city);


// updating the object propery
emp.salary = 36000;
console.log(emp.salary);

// deleting object property with delete keyword
delete emp.address.state
console.log(emp.address);

// adding new key value pair data (property)
emp.designation = "Software Developer";
console.log(emp);