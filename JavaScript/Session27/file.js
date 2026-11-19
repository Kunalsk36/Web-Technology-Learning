// Asynchronise Programming

// setTimeout()
setTimeout(()=>{
    console.log("Hello KK");
}, 6000)

// setInterval
setInterval(()=>{
    console.log("Kunal Kavathekar");
}, 1000);

function printUser(name, nextName) {
    setTimeout(()=>{
        console.log("Hello "+name);
        if(nextName) {
            nextName();
        }
    }, 1000);
}

// callback hell
printUser("Kunal", ()=>{
    printUser("Nikhil", ()=>{
        printUser("Salman", ()=>{
            printUser("Tejas", ()=>{
                printUser("Tanmay");
            })
        })
    })
})