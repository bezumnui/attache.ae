class Lang{
    constructor() {
        this.lang = "";
    }
    setLang(lang) {
        this.lang = lang;
    }
    getLang(){
        return this.lang;
    }
}

let nowAppear = "black";
let lang = new Lang();

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";SameSite=Strict;path=/";
}


function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function setLang(lang_){
    lang.setLang(lang_);
    // --language-image: url("../icons/english.svg");
    let r = document.querySelector(':root');
    if (lang.getLang() === "en") {
        r.style.setProperty("--language-image", "url(../icons/russian.svg)");
    }
    else {
        r.style.setProperty("--language-image", "url(../icons/english.svg)");
    }
}


function onLanguage() {
    if (lang.getLang() === "ru"){
        window.location.replace("https://attache.ae/?l=en");
    }
    else if (lang.getLang() === "en"){
        window.location.replace("https://attache.ae/?l=ru");
    }
}

function onAppear(first) {
    if (first === true) {
        let appear = getCookie("appear");
        if (appear !== "white" && appear !== "black") {
            appear = "black";  // black one
        }
        if (appear === "white"){
            nowAppear = "black";
        }
        else if (appear === "black") {
            nowAppear = "white";
        }

    }
    let r = document.querySelector(':root');
    // --main-bg-color: #2c2c2c;
    // --second-color: #0082ca;
    // --main-text-color: white;
    // --second-text-color: black;
    // --appear-image: url("static/icons/sun.svg");


    if (nowAppear === "white") {

        // r.style.setProperty("--main-bg-color", "#2c2c2c");
        // r.style.setProperty("--second-color", "#0082ca");
        // r.style.setProperty("--main-text-color", "white");
        // r.style.setProperty("--second-text-color", "black");
        // r.style.setProperty("--appear-image", "url(\"../../static/icons/sun.svg\")");
        // r.style.setProperty("--burger-icon", "url(\"../../static/icons/burger.svg\")");
        // r.style.setProperty("--head-logo-image", "url(\"../../static/images/head_logo.png\")");
        // r.style.setProperty("--speed-icon", "url(\"../../static/icons/speed.svg\")");
        //
        // r.style.setProperty("--prepair-image", "url(../../static/icons/white-papers.svg)");
        // r.style.setProperty("--agency-image", "url(../../static/icons/peoples.svg)");
        // r.style.setProperty("--services-image", "url(../../static/icons/tags.svg)");
        // r.style.setProperty("--contacts-image", "url(../../static/icons/black-phone.svg)");
        // r.style.setProperty("--contacts-image-mobi", "url(../../static/icons/phone.svg)");
        //
        // r.style.setProperty("--hotel-image", "url(../../static/images/hotel.webp)");
        //
        //
        // r.style.setProperty("--item1-icon", "url(../../static/icons/company_one.svg)");
        // r.style.setProperty("--item2-icon", "url(../../static/icons/company_two.svg)");
        // r.style.setProperty("--item3-icon", "url(../../static/icons/visa_four.svg)");
        // r.style.setProperty("--item4-icon", "url(../../static/icons/visa_six.svg)");
        // r.style.setProperty("--item5-icon", "url(../../static/icons/visa.svg)");
        // r.style.setProperty("--item6-icon", "url(../../static/icons/cert.svg)");
        r.classList.toggle("dark-theme");
        r.classList.remove("white-theme");
        nowAppear = "black";
        setCookie("appear", "black", 10);


    }
    else {
        r.classList.toggle("white-theme");
        r.classList.remove("dark-theme");
        nowAppear = "white";
        setCookie("appear", "white", 10);
    }
    //
    //
    // }
}
onAppear(true);