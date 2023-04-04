import React from "react";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AccountBox from "../accountBox/AccountBox";

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState();
    const [isAccountBoxOpen, setIsAccountBoxOpen] = useState(false);

    useEffect(() => {
        const userData = JSON.parse(sessionStorage.getItem("userData"));
        if (userData) {
            setUserData(userData);
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <div className="nav-bar">
            <div className="left">
                <Link to="/" className="nav_items">
                    GenUML
                </Link>
            </div>
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" class="hamburger">
                &#9776;
            </label>
            <div className="right">
                <div className="about">About</div>
                <div className="generate">
                    {/* if not logged ask to login first  */}
                    <Link to={isLoggedIn ? "/userRequirment" : "/sign-in"} className="nav_items">
                        Generate
                    </Link>
                </div>
                {isLoggedIn ? (
                    <div className="profile">
                        <p className="profile-name">{userData["fname"]}</p>
                        <div className="profile-circle" onClick={() => setIsAccountBoxOpen(!isAccountBoxOpen)}>
                            <p className="circle-inner">{userData.fname[0] + userData.lname[0]}</p>
                        </div>
                        {isAccountBoxOpen && <AccountBox setLogin={setIsLoggedIn} />}
                    </div>
                ) : (
                    <div className="login">
                        <Link to="/sign-in" className="nav_items">
                            Login
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
