// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeIcon.textContent = 'light_mode';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeIcon.textContent = 'light_mode';
    } else {
        localStorage.setItem('theme', 'dark');
        themeIcon.textContent = 'dark_mode';
    }
});
