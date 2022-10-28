import React, { useState } from "react"
import { getQuestionByNumber, numbers } from "../../services/firebase.db"

export const Authenticated = (props) => {

    const [selectedNumber, setSelectedNumber] = useState(null);
    const [selectedQuestion, setSelectedQuestion] = useState('');

    const onSelectChange = (event) => {
        setSelectedNumber(event.target.value)
    }

    const onInputChange = (event) => {
        setSelectedQuestion(event.target.value)
    }

    const onValidate = async () => {
        const question = await getQuestionByNumber(selectedNumber)
        setSelectedQuestion(question)
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log(selectedQuestion)
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

                <label className="underlined" htmlFor="input">Modify your question here :</label>
                <input
                    className="input-result"
                    type="text"
                    id="input"
                    placeholder="Type your question..."
                    value={selectedQuestion}
                    onChange={onInputChange}
                />

                <button className="form-submit" type="submit">Submit</button>
            </form>

        </div>
    )
}