import './index.css'
import { Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import ListArticles from './components/ListArticles'
import SingleArticle from './components/SingleArticle'


function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/articles" element={<ListArticles/>}/>
        <Route path="/articles/:article_id" element={<SingleArticle/>}/>

      </Routes>     
    </>
  )
}

export default App
