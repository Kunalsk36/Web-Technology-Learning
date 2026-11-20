// // Promise chaining - calling promises again and again by .then method

function printUser(name){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Hello "+ name);
            if(name) {
                resolve("success");
            }
            else {
                reject("failed");
            }
        }, 1000);
    });
}

// printUser("Kunal")
// .then(() => printUser("Aryan"))
// .then(() => printUser("Nikhil"))
// .then(() => printUser("Tushar"))
// .then(() => printUser())
// .then(() => printUser("Abhi"))
// .catch(() => {
//     console.log("Invalid arguments");
// })

// async - await
// async should be written before function declaration
// await should be written before statement declaration which returns promise

async function printUserAsync(){
    await printUser("Kunal");
    await printUser("Aryan");
    await printUser("Nikhil");
    setTimeout(async ()=>{ await printUser("Salman")}, 2000);
    await printUser("Tushar");
    await printUser("Abhi");
}
printUserAsync()