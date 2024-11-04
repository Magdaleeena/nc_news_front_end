import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Header(){
    const { article_id } = useParams()

    return (
    <header id='header'>
        <h1>NC news</h1>
        <nav className="links">
            <Link to="/">Home</Link>
            <Link to="/articles">Articles</Link>
            
        </nav>
    </header>
    )
}