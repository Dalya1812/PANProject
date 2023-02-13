import firebase from "firebase/compat/app"
import firebaseConfig from '../firebase.config'
import { getDatabase, ref, child, get, push, update, onValue } from "firebase/database"

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}


export async function getAllDb() {
    try {
        const dbRef = ref(getDatabase())
        const allDb = await get(dbRef)
        if (!allDb.exists()) {
            alert("Please choose a question number !");
        }
        return allDb.val()
    } catch (error) {
        console.error(error);
    }
}

export const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

export async function getQuestionByNumber(number) {
    try {
        const dbRef = ref(getDatabase())
        const snapshot = await get(child(dbRef, `${number}/question`))
        if (!snapshot.exists()) {
            alert("Please choose a question number !");
        }
        return snapshot.val()
    } catch (error) {
        console.error(error);
    }
}

export async function getAnswersByNumber(number) {
    for (var i = 0; i < 5; i++) {
        try {
            const dbRef = ref(getDatabase())
            const snapshot = await get(child(dbRef, `${number}/answers/${i}/answer`))
            if (!snapshot.exists()) {
                alert("Please choose a question number !")
            }
            return snapshot.val();
        } catch (error) {
            console.error(error)
        }

    }
}

export function onUpdateQuestion(number, question) {
    try {
        const dbRef = ref(getDatabase())
        const postData = {
            question: question,
        }

        const newPostKey = push(child(dbRef, `${number}/${question}`)).key
        const updates = {};
        updates[newPostKey] = postData;
        return update(dbRef, updates);
        alert("Question was updated successfully !")
    } catch (error) {
        console.error(error)
    }

}