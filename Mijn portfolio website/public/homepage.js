const cvAlert = document.getElementById("cvAlertWrapper");

alertLoop();

function alertLoop() {
    cvAlert.classList.remove("animate");
    void cvAlert.offsetWidth; 
    cvAlert.classList.add("animate");
    let randomDelay = Math.floor(Math.random() * (40000 - 10000 + 1)) + 10000;
    setTimeout(alertLoop, randomDelay);
}

const hamburgerPressed = document.querySelector("#hamburgerIconPressed");
const hamburgerIcon = document.querySelector("#hamburgerIcon");

const PopUpNav = document.querySelector("#pop-up-nav");

// when opened
hamburgerIcon.addEventListener("click", (e)=> {
    hamburgerIcon.classList.add("hidden");
    hamburgerPressed.classList.remove("hidden");
    // console.log("pressed icon is showing");
    PopUpNav.classList.remove("hidden");
});

// when closing
hamburgerPressed.addEventListener("click", (e)=> {
    hamburgerPressed.classList.add("hidden");
    hamburgerIcon.classList.remove("hidden");
    // console.log("pressed icon is hidden");
    PopUpNav.classList.add("hidden");
});

