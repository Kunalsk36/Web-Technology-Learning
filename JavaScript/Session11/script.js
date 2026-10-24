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

