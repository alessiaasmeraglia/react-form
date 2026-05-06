import { useState } from 'react'
import BlogForm from './components/BlogForm'
import BlogList from './components/BlogList'

const initialArticles = [
  {
    id: crypto.randomUUID(),
    title: 'Introduzione a React',
    content: 'React è una libreria JavaScript per costruire interfacce utente.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Cos’ è useState',
    content: 'useState permette di gestire dati dinamici all’interno di un componente.',
  },
]

function App() {
  const [articles, setArticles] = useState(initialArticles)

  function addArticle(newArticle) {
    setArticles([...articles, newArticle])
  }

  function deleteArticle(articleId) {
    setArticles(articles.filter((article) => article.id !== articleId))
  }

  function updateArticleTitle(articleId, newTitle) {
    setArticles(
      articles.map((article) => {
        if (article.id === articleId) {
          return {
            ...article,
            title: newTitle,
          }
        }

        return article
      })
    )
  }

  return (
    <div className="page">
      <header className="page-header">
        <div className="container">
          <h1>React Blog Form</h1>
        </div>
      </header>

      <main className="container">
        <BlogForm onAddArticle={addArticle} />

        <BlogList
          articles={articles}
          onDeleteArticle={deleteArticle}
          onUpdateArticleTitle={updateArticleTitle}
        />
      </main>
    </div>
  )
}

export default App
