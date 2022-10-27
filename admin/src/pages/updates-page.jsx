import { useNavigate } from "react-router-dom"
import { Authenticated } from "../cmps/questions update/admin-updates";
// import logo from '../../src/assets/images/logo';



export const UpdatesPage = () => {

    const navigate = useNavigate()



    return (
        <>
            <img className="logo-in-admin" src="https://pan-il.org/wp-content/uploads/PAN_Logo_without-text.png" />
            <div className="btn-go-home-container">
                <button className='btn-go-home' onClick={() => navigate('/login')}>Sign out</button>
            </div>
            <section className="user-login">
                <Authenticated />
            </section>
        </>
    )
}