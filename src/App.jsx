import './index.css'
import { Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import ListArticles from './components/ListArticles'
import SingleArticle from './components/SingleArticle'

import { UserProvider } from './context/UserContext'

import CommentList from './components/CommentList'



function App() {

  return (
    <UserProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/articles" element={<ListArticles/>}/>
        <Route path="/articles/:article_id" element={<SingleArticle/>}/>
        <Route path="/articles/:article_id/comments" element={<CommentList/>}/>

      </Routes>     
    </UserProvider>
  )
}

export default App

//<Route path="/articles/:article_id/comments" element={<CommentList/>}/>
//<Route path="/login" element={<LoginForm/>}/>
