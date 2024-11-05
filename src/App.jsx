import './index.css'
import { Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import ListArticles from './components/ListArticles'
import SingleArticle from './components/SingleArticle'
import LoginForm from './components/LoginForm'
import { UserProvider } from './context/UserContext'


function App() {

  return (
    <UserProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/articles" element={<ListArticles/>}/>
        <Route path="/articles/:article_id" element={<SingleArticle/>}/>
        <Route path="/login" element={<LoginForm/>}/>

      </Routes>     
    </UserProvider>
  )
}

export default App
