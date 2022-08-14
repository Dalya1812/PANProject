import React from "react";
import logo from '../../assets/images/logo.png';
import './Header.css'

function Header(){
    return(
        <section className="Header">
            {<img src={logo} className="logoPhoto" alt="Logo" />}
        </section>
    )
}


export default Header;