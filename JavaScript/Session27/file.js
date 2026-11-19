// Asynchronise Programming

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