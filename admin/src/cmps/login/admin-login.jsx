import React, {useEffect, useState} from "react"
import firebase from "firebase/compat/app"
import { AuthGoogle } from "../../services/auth.google"
import { onAuthStateChanged } from "firebase/auth"
import { firebaseConfig } from "../../services/firebase.config"

export const Login = () => {

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const [user, setUser] = useState({ email: "", uid : ""})
                    // console.log("user email ", user.email)

useEffect(() => {
    onAuthStateChanged(firebase.auth(), (user) => {
        if (user.email && user.uid) {
            setUser({email: user.email, uid : user.uid })
        } else {
            setUser({})   
        }
    })
})



    return (
        <section className="Header">

        <AuthGoogle auth={firebase.auth()} />
          
        </section>
    )
}



