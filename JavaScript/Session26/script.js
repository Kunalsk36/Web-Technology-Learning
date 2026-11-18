// BOM 

console.log(document);
console.log(screen);
console.log(navigator);
console.log(location);
console.log(localStorage);

let person = {
    Name : "kk", 
    salary : 20000,
    place : "rtn"
}

let person2 = {
    Name : "ak", 
    salary : 40000,
    place : "pune"
}

function printStatement(obj) {
    console.log(`name is ${obj.Name}`);
    
}
printStatement(person);
printStatement(person2);


// call() is used to borrow a function from some other object into another object.

// call() is a predefined JavaScript method used to invoke a function with a specified this context and individual arguments passed in comma-separated. It allows an object to borrow a method from another object without having to duplicate that method.

let stud1 = {
    sname : "Kunal",
    dept : "MCA",
    passoutYear : 2026,
    print : function () {
        console.log(`My name is ${this.sname}, department is ${this.dept} and passout year is ${this.passoutYear}`)
    }
}

let stud2 = {
    sname : "Nikhil",
    dept : "CS",
    passoutYear : 2025
}

let stud3 = {
    sname : "Tushar", 
    dept : "IT",
    passoutYear : 2024
}

stud1.print();
stud1.print.call(stud2);
stud1.print.call(stud3);