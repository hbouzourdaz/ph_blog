const DB_KEY = 'blog_articles';

function getArticles() {
    const data = localStorage.getItem(DB_KEY);
    return data ? JSON.parse(data) : [];
}

function saveArticle(article) {
    const articles = getArticles();
    if (!article.id) {
        article.id = Date.now().toString();
        article.date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
        articles.unshift(article); // Add to beginning
    } else {
        const index = articles.findIndex(a => a.id === article.id);
        if (index > -1) {
            articles[index] = article;
        }
    }
    localStorage.setItem(DB_KEY, JSON.stringify(articles));
    return article.id;
}

function getArticleById(id) {
    return getArticles().find(a => a.id === id);
}

function deleteArticle(id) {
    let articles = getArticles();
    articles = articles.filter(a => a.id !== id);
    localStorage.setItem(DB_KEY, JSON.stringify(articles));
}
