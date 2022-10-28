import { useNavigate } from "react-router-dom"
import { Authenticated } from "../cmps/questions update/admin-updates"
// import logo from '../../src/assets/images/logo';



export const UpdatesPage = () => {

    const navigate = useNavigate()



    return (
        <>
            <div className="btn-to-login-container">
                <button className='btn-to-login' onClick={() => navigate('/login')}>Sign out</button>
                <img className="logo-in-admin" src="https://pan-il.org/wp-content/uploads/PAN_Logo_without-text.png" />
            </div>
            <section className="user-login">
                <Authenticated />
            </section>
        </>
    )
}