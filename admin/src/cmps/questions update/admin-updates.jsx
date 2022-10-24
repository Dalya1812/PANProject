// import Multiselect from "multiselect-react-dropdown";
import React, { useState } from "react";

// this.state = {
//     options: [{name: 'Option 1️⃣', id: 1},{name: 'Option 2️⃣', id: 2}]
// };


export const Authenticated = (props) => {
    return <div>
        <div className="auth-title">Hello Admin 👋 </div>

        <form >
            <label for="cars">Choose a group : </label>
            <select id="cars" name="cars">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <br /><br />
            <label for="cars">Choose a question number : </label>
            <select id="cars" name="cars">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <button className="validate-btn" onClick={(console.log('hello1'))}>Validate</button>
        </form>

        <input className="input-result" type="text" placeholder="Type your question..."/>

        {/* <Multiselect 
        options={this.state.options}
        />             */}

        {/* <div><span>User Email</span>:<span>{props.user.email}</span></div>
        <div><span>UID</span>:<span>{props.user.uid}</span></div> */}
    </div>
}