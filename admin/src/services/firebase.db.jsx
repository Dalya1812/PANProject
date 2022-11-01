import { async } from "@firebase/util"
import { getDatabase, ref, child, get, push, update } from "firebase/database"


export const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

export async function getQuestionByNumber(number) {
    try {
        const dbRef = ref(getDatabase());
        const snapshot = await get(child(dbRef, `${number}/question`));
        if (!snapshot.exists()) {
            alert("Please choose a question number !");
        }
        return snapshot.val();
    } catch (error) {
        console.error(error);
    }
}


export function onUpdateQuestion(number, question) {
    try {
        const dbRef = ref(getDatabase())

        const postData = {
            question: question,
        }

        const newPostKey =  push(child(dbRef, `${number}/${question}`)).key
        const updates = {};
        updates[newPostKey] = postData;
        return update(ref(db), updates);
        alert("Question was updated successfully !")
    } catch (error) {
        console.error(error)
    }

}