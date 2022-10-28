import React, { useState } from "react";
import { onValidate, numbers } from "../../services/firebase.db";

const handleSubmit = event => {
    event.preventDefault();
}


export const Authenticated = (props) => {
    return <div>
        <div className="auth-title">Hello Admin 👋</div>

        <form onSubmit={handleSubmit} >
            <label className="underlined" htmlFor="questions" >Choose a question number :</label>
            <select id="questions">
                <option >Select a question</option>
                {
                    numbers.map(number => (
                        <option value={number} key={number}>{number}</option>
                    ))
                }
            </select>
            <button className="validate-btn" onClick={() => onValidate(7)}>Validate</button>
        </form>

        <label className="underlined" htmlFor="input">Modify your question here :</label>
        <input className="input-result" type="text" id="input" placeholder="Type your question..." >{}</input>

        <button className="form-submit ">Submit</button>
    </div>
}