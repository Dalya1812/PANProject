import { useNavigate } from "react-router-dom"
import { Authenticated } from "../cmps/questions update/admin-updates";
// import logo from '../../src/assets/images/logo';



export const UpdatesPage = () => {

    const navigate = useNavigate()



    return (
        <>
            <div className="btn-go-home-container">
                <button className='btn-go-home' onClick={() => navigate('/login')}>Sign out</button>
            </div>
            <img className="logo" src="../../../client/src/assets/images/logo.png"/>
            <section className="user-login">
                <Authenticated />
            </section>
        </>
    )
}