// Asynchronise Programming

let buyBtn = document.getElementById("buyBtn");
let msg = document.getElementById("msg");

buyBtn.addEventListener("click", () => {
    const promise = new Promise((res, rej) => {
        const success = true;

        if(success) {
            res("Order place")
        }
        else{
            rej("failed");
        }
    });
    promise.then((value)=>{
        msg.textContent = value;
    })
    .then(()=>{
        setTimeout(()=>{
            msg.textContent = msg.textContent + " then chain";
        }, 3000);
    })
    .catch((err)=>{
        msg.textContent = err;
    })
    .finally(()=>{
        setTimeout(()=>{
            msg.textContent = "Finally() "
        }, 5000);
    })
})