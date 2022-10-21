import { Login } from "../cmps/login/admin-login";
import { useNavigate } from "react-router-dom"


export const LoginPage = () => {

    const navigate = useNavigate()



    return (
        <>
            <div className="btn-go-home-container">
                <button className='btn-go-home' onClick={() => navigate('/')}>Home</button>
            </div>
            <section className="user-login">
                <Login />
            </section>
        </>
    )
}