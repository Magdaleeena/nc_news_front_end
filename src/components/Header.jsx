import { Link } from "react-router-dom";
import UserPanel from "./UserPanel";

export default function Header(){

    return (
    <header id='header'>
        <h1>NC news</h1>
        <nav className="links">
            <Link to="/">Home</Link>
            <Link to="/articles">Articles</Link>
            <UserPanel/>

        </nav>
    </header>
    )
}