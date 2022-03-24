import React, { useEffect } from 'react'
import './navStyle.css'


import {

    Link
} from "react-router-dom";

var myNav;

function changeNav(myNav) {
    if (window.scrollY >= 66) {
        myNav.classList.add("navScrolled");
        myNav.classList.remove("navTop");
    }
    else {
        myNav.classList.add("navTop");
        myNav.classList.remove("navScrolled");
    }
};
const NavBar = () => {
    // useEffect(() => {
    //     // adding the event when scroll change Logo
    //     window.addEventListener("scroll", changeNav);
    //   })
    document.addEventListener('DOMContentLoaded', function (event) {
        console.log('DOMContentLoaded before class:');
        myNav = document.getElementById('mainNav');
        window.addEventListener("scroll", () => { 
            changeNav(myNav);
     }, false);
    });



    return (
        <div>
            <nav id='mainNav' className="navbar navbar-expand-md navbar-dark navTop" style={{
                // backgroundColor: "#8f1b1b",
                opacity: "0.9",
                position: "fixed",
                top: "0",
                width: "100%",
                zIndex: "1"
            }}>
                <div className="container-fluid">
                    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/doctor">Doctors</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/team" >Our Team</Link>
                            </li>

                        </ul>
                    </div>
                    <div className="mx-auto order-0">
                        <Link className="navbar-brand mx-auto" to="/">A Y U</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".dual-collapse2">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                {/* <Link className="nav-link" to="/team">Our Team</Link> */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">Sign up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Log In</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar