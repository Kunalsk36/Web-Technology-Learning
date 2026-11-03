let btnYes = document.querySelector("#btnYes");
let btnNo = document.querySelector("#btnNo");

btnNo.addEventListener("mouseenter", () => {
    const maxLeft = Math.max(0, window.innerWidth - btnNo.offsetWidth);
    const maxTop = Math.max(0, window.innerHeight - btnNo.offsetHeight);
    const randomLeft = Math.random() * maxLeft;
    const randomTop = Math.random() * maxTop;

    btnNo.style.position = "fixed";
    btnNo.style.left = `${randomLeft}px`;
    btnNo.style.top = `${randomTop}px`;
});

// after clicking on btnYes, a celebration popup should be displayed with a message "Thank you!" and it should be removed after 4 seconds. popup means not alert or something like that, it should be like 🎉 celebration the sparks and all should be done.
btnYes.addEventListener("click", () => {
    const celebrationPopup = document.createElement("div");
    celebrationPopup.classList.add("celebration-popup");
    celebrationPopup.innerHTML = `
        <div class="popup-content">
            <h1>Thank you!</h1>
            <div class="confetti"></div>
        </div>
    `;
    document.body.appendChild(celebrationPopup);

    // Remove the popup after 4 seconds
    setTimeout(() => {
        document.body.removeChild(celebrationPopup);
    }, 4000);
})