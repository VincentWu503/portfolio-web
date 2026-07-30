const sections = document.querySelectorAll("section[id].content");

function trackScrollPos() {
    const currY = window.scrollY;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const id = section.getAttribute("id");

        const navLink = document.querySelector(`.nav-list-item a[href*=${id}]`);
        if (currY > sectionTop && currY <= sectionTop + sectionHeight) {
            navLink.classList.add("active");
        } else {
            navLink.classList.remove("active");
        }
    })
}

function toggleNavbarShadow() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 80) {
        nav.style.paddingTop = '0.8rem';
        nav.style.paddingBottom = '0.8rem';
        nav.style.boxShadow = '0 3px 4px -1px rgba(0, 0, 0, 0.10)';
    } else {
        nav.style.paddingTop = '1.25rem';
        nav.style.paddingBottom = '1.25rem';
        nav.style.removeProperty('box-shadow');
    }
}

const hamburger = document.getElementById('hamburger');
const navLists = document.querySelector('.nav-lists');
hamburger.addEventListener('click', () => {
    navLists.classList.toggle('show');

    if(navLists.classList.contains('show')) {
        hamburger.style.transform = "rotate(90deg)";
    } else {
        hamburger.style.transform = "rotate(0deg)";
    }
});

window.addEventListener("scroll", trackScrollPos);
window.addEventListener("scroll", toggleNavbarShadow);  