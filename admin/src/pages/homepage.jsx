import { useNavigate } from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext"

const Homepage = () => {
    const navigate = useNavigate();

    const { currentUser, logout } = useAuth()

    const handleLogout = async () => {  
        try{
            await logout()
            navigate("/")
            console.log("Signed out successfully")
        } catch (error) {
            console.error(error)
            console.log("Couldn't sign out ")
        }            
    }

    return (
        <section>
            <nav>
                <img className="logo-in-admin" src="https://pan-il.org/wp-content/uploads/PAN_Logo_without-text.png" alt="logo-in-admin"/>
                {!currentUser?<p>Welcome!</p>:<p></p>}
                {!currentUser?<p>To edit/update the questions, please Sign In</p>:<p>To sign out press "Logout"</p>}
                {!currentUser && <button onClick={() => { navigate("/login") }}>Sign In</button>}
                {currentUser && <button onClick={handleLogout}>Logout</button>}
            </nav>
        </section>
    )
}

export default Homepage