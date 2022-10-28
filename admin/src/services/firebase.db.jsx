import { getDatabase, ref, child, get } from "firebase/database";


export const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

export function onValidate(x) {

    const dbRef = ref(getDatabase());
    get(child(dbRef, `${x}/question`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            alert("Please choose a question number");
        }
    }).catch((error) => {
        console.error(error);
    });
}