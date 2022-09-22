const header_logo = document.querySelector(".header_logo")
const pricing = document.querySelector(".li-pricing")
const agency = document.querySelector(".li-agency")
const services = document.querySelector(".li-services")
const contacts = document.querySelector(".li-contacts")
const cross = document.querySelector("#cross");
header_logo.addEventListener("click", () => {
    window.location.replace("/");
})

const closeMiniHeader = () => {
    if (cross.style.display !== "none") {
        onCross(true).then();
    }
}

pricing.addEventListener("click", () => {

    closeMiniHeader()
    window.location.replace("/pricing");
})
agency.addEventListener("click", () => {
    closeMiniHeader()
    window.location.replace("/standard-services");
})
services.addEventListener("click", () => {
    closeMiniHeader()
    window.location.replace("/unique");
})
contacts.addEventListener("click", () => {
    closeMiniHeader()
    window.location.replace("/contact");
})



