import { getDatabase, ref, child, get } from "firebase/database";



export function click(x) {

    const dbRef = ref(getDatabase());
    get(child(dbRef, `${x}/question`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}