import { getDatabase, ref, child, get, push, update, remove } from "firebase/database"

export const getAllDb = async () => {
    try {
        const dbRef = ref(getDatabase())
        const snapshot = await get(dbRef)
        if (!snapshot.exists()) {
            console.log("Can't get data from DB! !")
        }
        return snapshot.val()
    } catch (error) {
        console.error(error);
    }
}

export const getSurveyQuestion = async (number) => {
    try {
        const dbRef = ref(getDatabase())
        const questionRef = child(dbRef, `surveyQuestions/${number}/question`)
        const snapshot = await get(child(dbRef, questionRef))
        if (!snapshot.exists()) {
            console.log("Can't get survey question!")
        }
        return snapshot.val()
    } catch (error) {
        console.error(error);
    }
}

export const onSaveSurvey = async (surveyQuestion, selectedNumber) => {
    try {
        const dbRef = ref(getDatabase())
        const surveyRef = child(dbRef, `surveyQuestions`)

        const postData = surveyQuestion.id ?
            { ...surveyQuestion } :
            { ...surveyQuestion, id: push(surveyRef).key }

        const updates = {};
        updates[selectedNumber] = postData
        await update(surveyRef, updates)


    } catch (error) {
        console.error(error)
    }
}

export const removeFromSurvey = async (id) => {
    try {
        const dbRef = ref(getDatabase())
        const surveyRef = child(dbRef, `surveyQuestions/${id}`);
        await remove(surveyRef)
    } catch (err) {
        console.log('Could not remove error from DB', err)
    }
}