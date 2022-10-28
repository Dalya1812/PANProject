import React, {useEffect, useState} from "react"
import firebase from "firebase/compat/app"
import { AuthGoogle } from "../../services/auth.google"
import { onAuthStateChanged } from "firebase/auth"
import { firebaseConfig } from "../../services/firebase.config"
// import { Authenticated } from "../questions update/admin-updates"
// import { BrowserRouter,Route, Routes } from "react-router-dom"

export const Login = () => {



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const [user, setUser] = useState({ email: "", uid : ""})

useEffect(() => {
    onAuthStateChanged(firebase.auth(), (user) => {
        // console.log("AUTH USER" ,user);
        if (user.email) {
            setUser({email: user.email, uid : user.uid })
        } else {
            setUser({})
        }

    })
})

    return (
        <section className="Header">
        {/* <BrowserRouter>
            {user.email? (
                <Routes>
                    <Route path="/update" 
                    element={<Authenticated user={user} />}
                    />
                </Routes>
            ) : <AuthGoogle auth={firebase.auth()} />}
        </BrowserRouter> */}

        <AuthGoogle auth={firebase.auth()} />
          
        
        </section>
    )
}



