import React, {useEffect, useState} from "react";
import logo from '../../assets/images/logo.png';
import firebase from "firebase/compat/app";
import { AuthGoogle } from "../../services/auth.google";
import { onAuthStateChanged } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

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
        setUser({email: user.email, id : user.uid })

    } )
})

    return (
        <section className="Header">
          <AuthGoogle auth={firebase.auth()} />
            {/* {<img src={logo} className="logoPhoto" alt="Logo" />} */}
            {/* <span>hello from login</span> */}

        </section>
    )
}


