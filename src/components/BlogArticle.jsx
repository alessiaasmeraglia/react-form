import { useState } from 'react'

function BlogArticle({ article, onDeleteArticle, onUpdateArticleTitle }) {
    const [isEditing, setIsEditing] = useState(false)
    const [editedTitle, setEditedTitle] = useState(article.title)

    function handleEditSubmit(event) {
        event.preventDefault()

        if (editedTitle.trim() === '') {
            return
        }

        onUpdateArticleTitle(article.id, editedTitle.trim())
        setIsEditing(false)
    }

    return (
        <article className="article-card">
            <div className="article-header">
                {isEditing ? (
                    <form onSubmit={handleEditSubmit} className="edit-form">
                        <input
                            type="text"
                            value={editedTitle}
                            onChange={(event) => setEditedTitle(event.target.value)}
                        />

                        <button type="submit">Salva</button>
                        <button type="button" onClick={() => setIsEditing(false)}>
                            Annulla
                        </button>
                    </form>
                ) : (
                    <>
                        <h3>{article.title}</h3>

                        <div className="article-actions">
                            <button type="button" onClick={() => setIsEditing(true)}>
                                Modifica
                            </button>

                            <button
                                type="button"
                                className="delete-button"
                                onClick={() => onDeleteArticle(article.id)}
                            >
                                🗑️
                            </button>
                        </div>
                    </>
                )}
            </div>

            <p>{article.content}</p>
        </article>
    )
}

export default BlogArticle