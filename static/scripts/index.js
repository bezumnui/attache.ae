const fbutton = document.querySelector(".fbutton")
const stan = document.querySelector(".stan");
const uni = document.querySelector(".uni");
fbutton.addEventListener("click", () => {
    window.location.replace("/contact");
})
stan.addEventListener("click", () => {
    window.location.replace("/standard-services");
})
uni.addEventListener("click", () => {
    window.location.replace("/unique");
})