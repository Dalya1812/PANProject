import { Login } from "../cmps/login/admin-login";
import { useNavigate } from "react-router-dom"
import { Authenticated } from "../cmps/questions update/admin-updates";


export const UpdatesPage = () => {

    const navigate = useNavigate()



    return (
        <>
            <div className="btn-go-home-container">
                <button className='btn-go-home' onClick={() => navigate('/login')}>Sign out</button>
            </div>
            <section className="user-login">
                <Authenticated />
            </section>
        </>
    )
}