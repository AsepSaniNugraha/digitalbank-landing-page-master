'use strict';

const addEventOnElements = function(elements, eventType, callback){
    for (let i= 0, len = elements.length;i < len; i++){
        elements[i].addEventListener(eventType, callback);
    }
}

const header = document.querySelector("[data-header]")
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-navlink]");
const overlay = document.querySelector("[data-overlay]");
const iconBox = document.querySelector(".icon-box");
const stopScroll = function(){
    document.body.classList.toggle("nav-open", navbar.classList.contains("active"))    
}

const toggleNav = function(){
    navbar.classList.toggle("active");
    iconBox.classList.toggle("active");
    overlay.classList.toggle("active");
    stopScroll();
}
addEventOnElements(navTogglers, "click", toggleNav)
addEventOnElements(navLinks, "click", toggleNav)

window.addEventListener("scroll", function(){
    const scrollY = window.scrollY;
    header.classList[scrollY > 80 ? "add" : "remove"]("active");
})