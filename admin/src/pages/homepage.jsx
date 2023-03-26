import React, { useState, useEffect } from 'react';
import { signOut, onAuthStateChanged } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import auth from "../services/firebase.config"


const Homepage = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggenIn] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggenIn(true)
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                // ...
                navigate("/updates")
            } else {
                // User is signed out
                // ...
                navigate("/")
            }
        })

    }, [navigate])


    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/login");
            setIsLoggenIn(false)
        }).catch((error) => {
            // An error happened.
            console.log('Can\'t signout', error)
        });
    }

    return (
        <section>
            <nav>
                <img className="logo-in-admin" src="https://pan-il.org/wp-content/uploads/PAN_Logo_without-text.png" alt="logo-in-admin"/>
                <p>Welcome!</p>
                <p>To edit/update the questions, please Sign In</p>
                {!isLoggedIn && <button onClick={() => { navigate("/login") }}>Sign In</button>}
                {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
            </nav>
        </section>
    )
}

export default Homepage