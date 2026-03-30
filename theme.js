// theme.js
function initTheme() {
    const isDark = localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Run immediately to avoid flash of unstyled content
initTheme();

document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.theme-toggle');
    btns.forEach(btn => {
        btn.addEventListener('click', toggleTheme);
    });
});
