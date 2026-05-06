import BlogArticle from './BlogArticle'

function BlogList({ articles, onDeleteArticle, onUpdateArticleTitle }) {
    return (
        <section className="articles-section">
            <h2>Lista articoli</h2>

            {articles.length === 0 ? (
                <p>Non ci sono articoli.</p>
            ) : (
                <div className="articles-list">
                    {articles.map((article) => (
                        <BlogArticle
                            key={article.id}
                            article={article}
                            onDeleteArticle={onDeleteArticle}
                            onUpdateArticleTitle={onUpdateArticleTitle}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}

export default BlogList