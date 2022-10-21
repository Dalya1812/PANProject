import React, { useEffect } from "react"
import firebase from "firebase/compat/app"
import * as firebaseui from "firebaseui"
import "firebaseui/dist/firebaseui.css"

export const AuthGoogle = (props) => {

    useEffect(() => {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(props.auth)
        ui.start('.firebase-auth-container',{ 
            signInOptions: [
                {
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    requireDisplayName: false,
                    disableSignUp: {status: true }
                }
                
            ],
            signInSuccessUrl: '/update',
        }) 
    }, [props.auth])
    return (
        <>
            {/* <div>AuthGoogle</div> */}
            <div className={"firebase-auth-container"}></div>
        </>
    )

}
