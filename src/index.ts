const sections: NodeListOf<Element> = document.querySelectorAll<Element>("section[id].content");

// ACTIVE UNDERLINE
function trackScrollPos() {
    const currY: number = (window as Window).scrollY;

    sections.forEach((section) => {
        const sectionHeight: number = (section as HTMLElement).offsetHeight;
        const sectionTop: number = (section as HTMLElement).offsetTop - 100;
        const id = section.getAttribute("id");

        const navLink: Element | null = document.querySelector<Element>(`.nav-list-item a[href*="${id}"]`);
        if (!navLink) return;
        if (currY > sectionTop && currY <= sectionTop + sectionHeight) {
            navLink.classList.add("active");
        } else {
            navLink.classList.remove("active");
        }
    })
}

function toggleNavbarShadow() {
    const nav: HTMLElement | null = document.querySelector('nav');
    if (!nav) return;
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

const hamburger: HTMLElement | null = document.getElementById('hamburger');
const navLists: HTMLElement | null = document.querySelector<HTMLElement>('.nav-lists');
hamburger?.addEventListener('click', () => {
    if (!hamburger || !navLists) return;
    navLists.classList.toggle('show');

    if(navLists.classList.contains('show')) {
        hamburger.style.transform = "rotate(90deg)";
    } else {
        hamburger.style.transform = "rotate(0deg)";
    }
});

// TOGGLE DARK MODE
const darkButton: HTMLElement | null = document.getElementById('dark-mode-btn');
darkButton?.addEventListener('click', () => {
    let body: HTMLElement = document.body;

    body.classList.toggle("dark-mode");
});

window.addEventListener("scroll", trackScrollPos);
window.addEventListener("scroll", toggleNavbarShadow);  