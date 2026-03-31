// search.js
document.addEventListener('DOMContentLoaded', () => {
    const modalHtml = `
    <div id="global-search-modal" class="fixed inset-0 z-[100] hidden bg-black/50 backdrop-blur-sm flex items-start justify-center pt-10 sm:pt-20 px-3 sm:px-4 opacity-0 transition-opacity duration-300">
        <div class="bg-white dark:bg-[#1a1a1a] w-full max-w-2xl rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden scale-95 transition-transform duration-300" id="global-search-content">
            <div class="p-4 border-b border-gray-100 dark:border-gray-800 flex items-center gap-3">
                <i class="fa-solid fa-search text-gray-400 ml-2"></i>
                <input type="text" id="global-search-input" placeholder="ابحث في الكورسات والمقالات..." class="w-full bg-transparent outline-none text-gray-900 dark:text-white text-lg placeholder-gray-400 font-sans">
                <button id="close-search-modal" class="text-[10px] bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-500 font-mono tracking-widest uppercase hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" dir="ltr">ESC</button>
            </div>
            <div id="global-search-results" class="max-h-[60vh] sm:max-h-96 overflow-y-auto p-2 custom-scrollbar">
                <div class="p-6 text-center text-gray-400 text-sm font-mono">
                    استخدم <span class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-gray-500 mx-1">Ctrl + K</span> للوصول السريع
                </div>
            </div>
            <div class="p-3 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#121212] flex justify-between items-center text-[11px] text-gray-400 font-mono">
                <span>بحث مدعوم في <i class="fa-solid fa-atom text-primary mx-1"></i> فيزياء.تك</span>
                <span dir="ltr">Navigation: &uarr; &darr; &crarr;</span>
            </div>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    function loadScript(src) {
        return new Promise((resolve) => {
            if (document.querySelector(`script[src="${src}"]`)) return resolve();
            const s = document.createElement('script');
            s.src = src;
            s.onload = resolve;
            s.onerror = resolve; // Continue even if missing
            document.body.appendChild(s);
        });
    }

    const modal = document.getElementById('global-search-modal');
    const content = document.getElementById('global-search-content');
    const input = document.getElementById('global-search-input');
    const results = document.getElementById('global-search-results');
    const closeBtn = document.getElementById('close-search-modal');

    let allDataLoaded = false;
    let combinedData = [];
    let activeIndex = -1;

    async function ensureData() {
        if (allDataLoaded) return;
        
        await Promise.all([
            loadScript('articles.js'),
            loadScript('courses_lang.js'),
            loadScript('courses_frameworks.js')
        ]);

        if (typeof articlesList !== 'undefined') {
            articlesList.forEach(a => {
                combinedData.push({
                    type: 'مقال',
                    title: a.title,
                    desc: a.excerpt,
                    url: `article.html?id=${a.id}`,
                    icon: 'fa-regular fa-file-lines text-primary'
                });
            });
        }

        let courses = {};
        if (typeof languagesData !== 'undefined') Object.assign(courses, languagesData);
        if (typeof frameworksData !== 'undefined') Object.assign(courses, frameworksData);

        Object.entries(courses).forEach(([key, c]) => {
            combinedData.push({
                type: 'مسار برمجية',
                title: c.title,
                desc: c.description,
                url: `programming.html`,
                icon: `${c.icon} text-gray-400`
            });
            c.lessons.forEach(l => {
                combinedData.push({
                    type: 'درس',
                    title: l.title,
                    desc: l.desc,
                    url: `programming.html`,
                    icon: 'fa-solid fa-laptop-code text-gray-500'
                });
            });
        });

        allDataLoaded = true;
    }

    function openSearch() {
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            content.classList.remove('scale-95');
            input.focus();
            ensureData().then(() => renderSearch(input.value));
        }, 10);
    }

    function closeSearch() {
        modal.classList.add('opacity-0');
        content.classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
            input.value = '';
            activeIndex = -1;
        }, 300);
    }

    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            openSearch();
        }
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeSearch();
        }
    });

    closeBtn.addEventListener('click', closeSearch);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeSearch();
    });

    document.querySelectorAll('.search-toggle').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openSearch();
        });
    });

    input.addEventListener('input', (e) => {
        activeIndex = -1;
        renderSearch(e.target.value);
    });

    input.addEventListener('keydown', (e) => {
        const resultItems = results.querySelectorAll('.search-result-item');
        if (resultItems.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            activeIndex = (activeIndex + 1) % resultItems.length;
            updateHighlight(resultItems);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            activeIndex = (activeIndex - 1 + resultItems.length) % resultItems.length;
            updateHighlight(resultItems);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (activeIndex >= 0 && activeIndex < resultItems.length) {
                resultItems[activeIndex].click();
            } else if (resultItems.length > 0) {
                resultItems[0].click();
            }
        }
    });

    function updateHighlight(items) {
        items.forEach((item, index) => {
            if (index === activeIndex) {
                item.classList.add('bg-gray-100', 'dark:bg-gray-800');
                item.scrollIntoView({ block: 'nearest' });
            } else {
                item.classList.remove('bg-gray-100', 'dark:bg-gray-800');
            }
        });
    }

    function renderSearch(query) {
        const q = query.toLowerCase().trim();
        if(!q) {
            results.innerHTML = `
                <div class="p-6 text-center text-gray-400 text-sm font-mono">
                    اكتب ما تبحث عنه (مثال: "بايثون"، "كم")
                </div>
            `;
            return;
        }

        const filtered = combinedData.filter(item => 
            item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q)
        ).slice(0, 10);

        if(filtered.length === 0) {
            results.innerHTML = `
                <div class="p-6 text-center text-gray-500 text-sm font-mono">
                    <i class="fa-solid fa-ghost text-2xl mb-2 opacity-50 block"></i>
                    لا توجد نتائج مطابقة لبحثك.
                </div>
            `;
            return;
        }

        let html = '<div class="flex flex-col gap-1">';
        filtered.forEach((item, idx) => {
            html += `
                <a href="${item.url}" class="search-result-item group flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-700">
                    <div class="w-10 h-10 rounded-lg bg-gray-50 dark:bg-[#121212] flex items-center justify-center shrink-0 border border-gray-100 dark:border-gray-800">
                        <i class="${item.icon}"></i>
                    </div>
                    <div class="flex-1 min-w-0">
                        <h4 class="text-sm font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors truncate">${item.title}</h4>
                        <p class="text-xs text-gray-500 truncate">${item.desc}</p>
                    </div>
                    <div class="shrink-0 pt-1">
                        <span class="text-[10px] bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-gray-400 px-2.5 py-1 rounded-md font-bold">${item.type}</span>
                    </div>
                </a>
            `;
        });
        html += '</div>';
        results.innerHTML = html;
    }
});
