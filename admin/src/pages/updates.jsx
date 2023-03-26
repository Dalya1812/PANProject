import { useNavigate } from "react-router-dom"
import { Authenticated } from "../cmps/admin-updates"
import { useAuth } from "../contexts/AuthContext"

const Updates = () => {

    const navigate = useNavigate()
    const { logout } = useAuth()

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
        <>
            <div className="btn-to-login-container updates-header">
                <img className="logo-in-admin" src="https://pan-il.org/wp-content/uploads/PAN_Logo_without-text.png" alt="logo-in-admin"/>
                <button className='btn-to-login' onClick={() => handleLogout()}>Sign out</button>
            </div>
            <section className="user-login">
                <Authenticated />
            </section>
        </>
    )
}

export default Updates