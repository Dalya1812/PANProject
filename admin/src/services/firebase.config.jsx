import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

export const firebaseConfig = {
    apiKey: "AIzaSyAA0IYxpCiN5p1-c1I_uagMVzCGHV8W4-Y",
    authDomain: "admin-page-for-pan-project.firebaseapp.com",
    projectId: "admin-page-for-pan-project",
    storageBucket: "admin-page-for-pan-project.appspot.com",
    messagingSenderId: "287013832992",
    appId: "1:287013832992:web:f0f263a1de1dd01f3eaf45",
    measurementId: "G-VWCKWJFKBH"
};


const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)



