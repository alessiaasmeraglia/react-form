import { useState } from 'react'

function BlogForm({ onAddArticle }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    function handleSubmit(event) {
        event.preventDefault()

        if (title.trim() === '' || content.trim() === '') {
            return
        }

        const newArticle = {
            id: crypto.randomUUID(),
            title: title.trim(),
            content: content.trim(),
        }

        onAddArticle(newArticle)

        setTitle('')
        setContent('')
    }

    return (
        <section className="form-section">
            <h2>Aggiungi articolo</h2>

            <form onSubmit={handleSubmit} className="article-form">
                <div className="form-group">
                    <label htmlFor="title">Titolo</label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Inserisci il titolo"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="content">Contenuto</label>
                    <textarea
                        id="content"
                        placeholder="Inserisci il contenuto"
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                    />
                </div>

                <button type="submit">Aggiungi</button>
            </form>
        </section>
    )
}

export default BlogForm