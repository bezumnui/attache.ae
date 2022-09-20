
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function undo(sl, prevId, afterId, doAfter) {
    await sleep(sl);
    document.getElementById(prevId).id = afterId;
    if (doAfter != null) {
        doAfter();
    }
}

async function onCross(immediately) {
    let navID = document.querySelector("#navID");
    let cross = document.querySelector("#cross");
    cross.style.display = "none";
    if (immediately === true) {
        navID.style.display = "none";
        return;
    }
    navID.classList.toggle("slide-out");
    const animationEndCallback = (e) => {
        navID.removeEventListener('animationend', animationEndCallback);

        navID.classList.remove('slide-out');
        navID.style.display = "none";
    }
    navID.addEventListener("animationend", animationEndCallback)
}

async function onBurger() {
    // document.getElementById("burger").style.animationName = "burger-anim";
    // document.getElementById("burger").style.animationDelay = .3;
    // document.getElementById("burger").style.animation = "burger-anim .2s linear 1";

    let navID = document.querySelector("#navID");
    let cross = document.querySelector("#cross");
    navID.style.display = "flex";
    cross.style.display = "block";

    navID.classList.toggle("slide-in")

    let animationEndCallback = (e) => {
        navID.removeEventListener('animationend', animationEndCallback);
        navID.classList.remove('slide-in');


    }
    navID.addEventListener('animationend', animationEndCallback)

}
