import './index.css'
import { Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import ListArticles from './components/ListArticles'
import SingleArticle from './components/SingleArticle'
import { UserProvider } from './context/UserContext'
import CommentList from './components/CommentList'
import TopicsList from './components/TopicsList'
import ErrorPage from './components/ErrorPage'



function App() {

  return (
    <UserProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/articles" element={<ListArticles/>}/>
        <Route path="/articles/:article_id" element={<SingleArticle/>}/>
        <Route path="/articles/:article_id/comments" element={<CommentList/>}/>
        <Route path="/topics" element={<TopicsList/>} />
        <Route path="*" element={<ErrorPage/>}/>        
      </Routes>     
    </UserProvider>
  )
}

export default App

//<Route path="/login" element={<LoginForm/>}/>

