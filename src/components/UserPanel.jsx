import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

export default function UserPanel(){
    const [user, setUser] = useContext(UserContext)

    function logout(){
        setUser(null)
    }

    return (
        <div className="user-panel">
            <div className="greeting">
                Hello { user && user.name ? user.name : ''}
            </div>
            { user ? (<button className="login-button" onClick={logout}>Logout</button>) : (                
                <Link to="/login">                   
                </Link>
            ) }
        </div>
    )
}