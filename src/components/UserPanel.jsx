import { useContext } from "react";
import { UserContext } from "../context/UserContext";


export default function UserPanel(){
    const [user, setUser] = useContext(UserContext)

    const login = () => {
        setUser({ name: 'jonny' })
      }

    function logout(){
        setUser(null)
    }

    return (
        <div className="user-panel">
            <div className="greeting">
                Hello { user && user.name ? user.name : 'guest'}
                { user ? (<button className="login-button" onClick={logout}>Logout</button>) : (
                <button className="login-button" onClick={login}>Login</button>
                )}
            </div>            
        </div>
    )
}