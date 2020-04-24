"use strict";

document.querySelector("#apps").addEventListener("click", () => {
    if (document.querySelector(".nav-account").classList.contains("show")) 
    document.querySelector(".nav-account").classList.remove("show");
    document.querySelector(".nav-apps").classList.toggle("show");
})

document.querySelector("#account").addEventListener("click", () => {
    if (document.querySelector(".nav-apps").classList.contains("show")) 
        document.querySelector(".nav-apps").classList.remove("show");
    document.querySelector(".nav-account").classList.toggle("show");
})