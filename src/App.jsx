import './index.css'
import { Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import ListArticles from './components/ListArticles'
import SingleArticle from './components/SingleArticle'
import CommentList from './components/CommentList'


function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/articles" element={<ListArticles/>}/>
        <Route path="/articles/:article_id" element={<SingleArticle/>}/>
        <Route path="/articles/:article_id/comments" element={<CommentList/>}/>

      </Routes>     
    </>
  )
}

export default App
