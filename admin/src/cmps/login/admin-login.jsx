import React, {useEffect, useState} from "react";
import firebase from "firebase/compat/app";
import { AuthGoogle } from "../../services/auth.google";
import { onAuthStateChanged } from "firebase/auth";
// import { Authenticated } from "../questions update/admin-updates";
// import { BrowserRouter,Route, Routes } from "react-router-dom";

export const Login = () => {

const firebaseConfig = {
    apiKey: "AIzaSyAA0IYxpCiN5p1-c1I_uagMVzCGHV8W4-Y",
    authDomain: "admin-page-for-pan-project.firebaseapp.com",
    projectId: "admin-page-for-pan-project",
    storageBucket: "admin-page-for-pan-project.appspot.com",
    messagingSenderId: "287013832992",
    appId: "1:287013832992:web:f0f263a1de1dd01f3eaf45",
    measurementId: "G-VWCKWJFKBH"
};

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



