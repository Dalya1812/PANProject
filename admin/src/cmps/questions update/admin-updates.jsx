import React, { useState } from "react";
import { click } from "../../services/firebase.db";


export const Authenticated = (props) => {
    return <div>
        <div className="auth-title">Hello Admin 👋 </div>

        <form >
            <label className="underlined" for="questions">Choose a question number : </label>
            <select id="questions">
                <option >Select a question</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
            </select>
            <button className="validate-btn" onClick={click(1)}>Validate</button>
        </form>

        <label className="underlined" for="questions">Modify your question here : </label>
        <input className="input-result" type="text" placeholder="Type your question..." />

        <button className="form-submit ">Submit</button>
    </div>
}