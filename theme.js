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

// Bookmarks Logic
function getBookmarks() {
    return JSON.parse(localStorage.getItem('bookmarks') || '[]');
}

function isBookmarked(id) {
    if(!id) return false;
    return getBookmarks().includes(id.toString());
}

function toggleBookmark(id, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    if(!id) return;
    
    const idStr = id.toString();
    let bookmarks = getBookmarks();
    if (bookmarks.includes(idStr)) {
        bookmarks = bookmarks.filter(b => b !== idStr);
    } else {
        bookmarks.push(idStr);
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    window.dispatchEvent(new CustomEvent('bookmarksUpdated'));
    
    // Update multiple instances if they exist
    document.querySelectorAll('.bookmark-btn-' + idStr).forEach(btn => {
        const icon = btn.querySelector('i');
        if(!icon) return;
        if (bookmarks.includes(idStr)) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid', 'text-yellow-500');
            btn.classList.add('bg-yellow-50', 'dark:bg-yellow-900/20', 'border-yellow-200');
        } else {
            icon.classList.remove('fa-solid', 'text-yellow-500');
            icon.classList.add('fa-regular');
            btn.classList.remove('bg-yellow-50', 'dark:bg-yellow-900/20', 'border-yellow-200');
        }
    });

    // Also update custom texts next to the icon if available
    document.querySelectorAll('.bookmark-text-' + idStr).forEach(el => {
        el.innerText = bookmarks.includes(idStr) ? 'محفوظ' : 'حفظ للمفضلة';
    });
}
