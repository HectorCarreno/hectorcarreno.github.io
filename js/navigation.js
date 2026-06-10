// Mobile Menu Toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
        const visible = navList.getAttribute('data-visible');
        if (visible === 'false') {
            navList.setAttribute('data-visible', 'true');
            navToggle.setAttribute('aria-expanded', 'true');
        } else {
            navList.setAttribute('data-visible', 'false');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
}
