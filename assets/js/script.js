// Navigation Bar
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";        
    } else {
        menuBtn.className = "nav-menu";
    }
}

// Navigation Shadow
window.onscroll = function() {
    headerShadow()
};

function headerShadow() {
    const navHeader = document.getElementById("header");
    const navMenu = document.getElementById("myNavMenu")

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
        navMenu.style.top = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
        navMenu.style.top = "90px";
    }
}

// Tab About Me
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname) {
        for (tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }