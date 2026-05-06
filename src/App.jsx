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

}

export default App
