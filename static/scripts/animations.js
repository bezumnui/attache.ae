
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

async function onCross() {
    document.getElementById("cross").style.display = "none";
    document.getElementById("navID").style.animation = "remove-menu .2s linear 1";
    await sleep(200);
    document.getElementById("navID").style.display = "none";
    document.getElementById("navID").style.animation = "";
    
}

async function onBurger() {
    console.log(123);
    // document.getElementById("burger").style.animationName = "burger-anim";
    // document.getElementById("burger").style.animationDelay = .3;
    document.getElementById("burger").style.animation = "burger-anim .2s linear 1";
    document.getElementById("navID").style.display = "flex"
    document.getElementById("navID").style.animation = "display-menu .2s linear 1";
    document.getElementById("cross").style.display = "block";
    await sleep(200);
    document.getElementById("burger").style.animation = "";
    document.getElementById("navID").style.display = "flex";
    document.getElementById("navID").style.animation = "";

}
