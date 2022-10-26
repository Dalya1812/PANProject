// import Multiselect from "multiselect-react-dropdown";
import React, { useState } from "react";
import { getDatabase } from "firebase/database";
import firebase from "firebase/app";




export const Authenticated = (props) => {
    return <div>
        <div className="auth-title">Hello Admin 👋 </div>

        <form >
            <label className="underligned" for="groups">Choose a group of questions : </label>
            <select id="groups" >
                <option >Select a group</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <br /><br />
            <label className="underligned" for="questions">Choose a question number : </label>
            <select id="questions">
                <option >Select a question</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <button className="validate-btn" onClick={(console.log('hello1'))}>Validate</button>
        </form>

        <label className="underligned" for="questions">Modify your question here : </label>
        <input className="input-result" type="text" placeholder="Type your question..." />

        <button>Submit</button>

        {/* <Multiselect 
        options={this.state.options}
        />             */}

        {/* <div><span>User Email</span>:<span>{props.user.email}</span></div>
        <div><span>UID</span>:<span>{props.user.uid}</span></div> */}
    </div>
}