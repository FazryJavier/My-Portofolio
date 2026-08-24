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

document.addEventListener("DOMContentLoaded", function() {
    const experienceList = document.getElementById('experience-list');
    const loadMoreBtn = document.getElementById('load-more-experience');
    const tabContentsWrapper = document.querySelector('.tab-contents-wrapper');
    if (experienceList && loadMoreBtn && tabContentsWrapper) {
        const items = experienceList.querySelectorAll('li');
        let visibleCount = 3;
        items.forEach((li, idx) => {
            if (idx >= visibleCount) li.style.display = 'none';
        });
        if (items.length > visibleCount) {
            loadMoreBtn.style.display = 'block';
        }
        loadMoreBtn.addEventListener('click', function() {
            let nextCount = visibleCount + 3;
            items.forEach((li, idx) => {
                if (idx < nextCount) li.style.display = '';
            });
            visibleCount = nextCount;
            tabContentsWrapper.classList.add('scrollable');
            if (visibleCount >= items.length) {
                loadMoreBtn.style.display = 'none';
            }
        });
    }
});