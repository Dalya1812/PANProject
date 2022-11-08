import React, { useState } from "react"
import { getQuestionByNumber, getAnswersByNumber, numbers, onUpdateQuestion, getAllDb } from "../../services/firebase.db"

export const Authenticated = () => {

    const [selectedNumber, setSelectedNumber] = useState(null);
    const [selectedQuestion, setSelectedQuestion] = useState('');
    const [selectedAnswers, setSelectedAnswers] = useState('');
    
    // const database = getAllDb()
    // console.log("database", database);

    const onSelectChange = (event) => {
        setSelectedNumber(event.target.value)
    }

    const onInputChange = (event) => {
        setSelectedQuestion(event.target.value)
        setSelectedAnswers(event.target.value)
    }

    const onValidate = async () => {
        const questionNumber = await getQuestionByNumber(selectedNumber)
        const answers = await getAnswersByNumber(selectedNumber)
        setSelectedQuestion(questionNumber)
        setSelectedAnswers(answers)
    }

    // const setNewQuestion = async () => {
    //     const questionNumber = await getQuestionByNumber(selectedNumber)
    //     const updatedQuestion = 1
    //     onUpdateQuestion(questionNumber, updatedQuestion)
    // }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(selectedQuestion)
        console.log(selectedAnswers)
        // onUpdateQuestion(selectedNumber, selectedQuestion)
    }

    return (
        <div>
            <div className="auth-title">Hello Admin 👋</div>

            <form onSubmit={handleSubmit} >
                <label className="underlined" htmlFor="questions" >Choose a question number :</label>
                <select onChange={onSelectChange} id="questions">
                    <option >Select a question</option>
                    {
                        numbers.map(number => (
                            <option value={number - 1} key={number}>{number}</option>
                        ))
                    }
                </select>
                <button className="validate-btn" onClick={() => onValidate(selectedNumber)}>Validate</button>

                <label className="underlined" htmlFor="input-q">Modify your question here :</label>
                <input
                    className="input-result"
                    type="text"
                    id="input-q"
                    placeholder="Type your question..."
                    value={selectedQuestion}
                    onChange={onInputChange}
                />
                <br />

                <label className="underlined" htmlFor="input-a">Modify your answers here :</label>
                <br />
                <input
                    className="input-result"
                    type="text"
                    id="input-a"
                    placeholder="Type your question..."
                    value={selectedAnswers}
                    onChange={onInputChange}
                /> <br />
                 
                <button className="form-submit" type="submit" >Submit</button>
            </form>

        </div>
    )
}