document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('language-switcher');
    const translatableElements = document.querySelectorAll('[data-i18n]');

    let translations = {};
    let currentLang = localStorage.getItem('lang') || 'en';

    // Fetch translations
    fetch('/data/translations.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            translations = data;
            // Set initial language
            languageSwitcher.textContent = currentLang.toUpperCase();
            updateContent(currentLang);
        })
        .catch(error => {
            console.error('Error loading translations:', error);
        });

    languageSwitcher.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        localStorage.setItem('lang', currentLang);
        languageSwitcher.textContent = currentLang.toUpperCase();
        updateContent(currentLang);
    });

    function updateContent(lang) {
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
    }
});