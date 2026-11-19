// Promise() - It handles asynchronous operations and solves the callback hell problem.

// states:
// 1. fulfilled
// 2. pending
// 3. rejected

let promise = new Promise((resolve, reject) => {
    let acceptProposal = true;
    if(acceptProposal) {
        resolve("She said Yesss!");
    }
    else{
        reject("Better luck next time");
    }
})

console.log(promise);

promise.then(()=>{
    console.log("Hurreee");
})
promise.catch(()=>{
    console.log("It's Okay")
})
promise.finally(()=>{
    console.log("finally closure")
})