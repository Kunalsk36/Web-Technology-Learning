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

// Array of object :
let employee = [
    {
        eid : 1,
        Name : "kunal",
        age : 23,
        salary : 90000,
        department : "development",
        hobbies : ["watching movies", "listening music"],
        place : "ratnagiri",
        company : "TCS",
        gender : "male",
        isMarried : false
    },
    {
        eid : 2,
        Name : "tushar",
        age : 24,
        salary : 20000,
        department : "ITI",
        hobbies : ["blogging", "photography"],
        place : "chaferi",
        company : "TN",
        gender : "male",
        isMarried : false
    },
    {
        eid : 3,
        Name : "nikhil",
        age : 22,
        salary : 70000,
        department : "testing",
        hobbies : ["watching series", "gym"],
        place : "kolisare",
        company : "infosys",
        gender : "male",
        isMarried : false
    },
    {
        eid : 4,
        Name : "salman",
        age : 25,
        salary : 40000,
        department : "operation",
        hobbies : ["Travel", "listening music"],
        place : "Mumbra",
        company : "ACS",
        gender : "male",
        isMarried : false
    },
    {
        eid : 5,
        Name : "trupti",
        age : 24,
        salary : 60000,
        department : "fashion",
        hobbies : ["designing", "travel"],
        place : "pune",
        company : "TGG",
        gender : "female",
        isMarried : false
    },
    {
        eid : 6,
        Name : "saloni",
        age : 22,
        salary : 30000,
        department : "development",
        hobbies : ["travel", "listening music"],
        place : "devgad",
        company : "SSG",
        gender : "female",
        isMarried : true
    },
    {
        eid : 7,
        Name : "antara",
        age : 21,
        salary : 100000,
        department : "Analysis",
        hobbies : ["shopping", "listening music"],
        place : "ratnagiri",
        company : "TCS",
        gender : "female",
        isMarried : false
    },
    {
        eid : 8,
        Name : "pooja",
        age : 21,
        salary : 50000,
        department : "Psychology",
        hobbies : ["travel", "shopping"],
        place : "pune",
        company : "MPK",
        gender : "female",
        isMarried : true
    },
    {
        eid : 9,
        Name : "abhishek",
        age : 26,
        salary : 70000,
        department : "operation",
        hobbies : ["reading", "cycling"],
        place : "khandala",
        company : "JSW",
        gender : "male",
        isMarried : false
    },
    {
        eid : 10,
        Name : "rohit",
        age : 25,
        salary : 80000,
        department : "ITI",
        hobbies : ["hiking", "listening music"],
        place : "mumbai",
        company : "ME",
        gender : "male",
        isMarried : true
    },
]

// 1. Extract the employees with same age
let sameAgeEmps = employee.reduce((acc, curr) => {
    if (!acc[curr.age]) {
        acc[curr.age] = [];
    }
    acc[curr.age].push(curr);
    return acc;
}, {});
console.log(sameAgeEmps);

// 2. Extract the employees whos department is same
let sameDeptEmps = employee.reduce((acc, curr) => {
    if (!acc[curr.department]) {
        acc[curr.department] = [];
    }
    acc[curr.department].push(curr);
    return acc;
}, {});
console.log(sameDeptEmps);


// 3. Increase the salary by 15% of employees whos having more than 50,000
let increasedSalaryEmps = employee.map((emp) => {
    if (emp.salary > 50000) {
        emp.salary += emp.salary * 15 / 100;
    }
    return emp;
})
console.log(increasedSalaryEmps);

// 4. Extract the married employees
let marriedEmps = employee.filter((emp) => emp.isMarried);
console.log(marriedEmps);

// 5. Extact the all male employees and give them 25% of hike
let maleEmpsWithHike = employee.filter((emp) => emp.gender == "male").map((emp) => {emp.salary += emp.salary * 25 / 100; return emp});
console.log(maleEmpsWithHike);

// 6. Extract the all female employees and deduct their salaries by 25% and afterwards increase by 50%.
let femaleEmps = employee.filter((emp) => emp.gender == "female").map((emp) => {
    emp.salary -= emp.salary * 25 / 100;
    emp.salary += emp.salary * 50 / 100;
    return emp;
})
console.log(femaleEmps);

// 7. add the experience key to the all employees based on their salary
let experinceKeyAddedEmps = employee.map(emp => 
    {
        if(emp.salary <= 30000){
            emp.experience = "1 year";
        }
        else if(emp.salary <= 60000) {
            emp.experience = "2 years"
        }
        else if(emp.salary <= 100000) {
            emp.experience = "3 years"
        }
        else if(emp.salary > 100000) {
            emp.experience = "4 years"
        }
        return emp;
    }
)
console.log(experinceKeyAddedEmps);

// 8. delete all married female employees
// let deletedMarriedFemale = employee.filter( (emp) => {if(emp.isMarried && emp.gender == "female") {}})
// console.log(deletedMarriedFemale);
employee.forEach((emp, i)=>{ if(emp.isMarried && emp.gender === "female") {
    delete employee[i];
}})
console.log(employee);


// 9. Sort the all employees based on their experienced
let sortedByExperience = employee.sort((a, b) => {
    let expA = parseInt(a.experience);
    let expB = parseInt(b.experience);
    return expA - expB;
});
console.log(sortedByExperience);

// 10. Sort the employees in reversed orderd based on their id
let sortedByIdReversed = employee.sort((a, b) => b.eid - a.eid);
console.log(sortedByIdReversed);