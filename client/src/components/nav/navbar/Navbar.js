import React from "react";
import "./Navbar.css";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AccountBox from "../accountBox/AccountBox";
import AccountContext from "../../../context/AccountContext";
import axios from "axios";

function Navbar(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState();
    const [isAccountBoxOpen, setIsAccountBoxOpen] = useState(false);
    const { accountData } = useContext(AccountContext); // Context

    useEffect(() => {
        setIsLoggedIn(props.isLogin);
        console.log("user logged -> " + props.isLogin);
        console.log(accountData);
        axios
            .get("http://localhost/GenUML/Login_Register/session.php", {
                withCredentials: true,
            })
            .then((response) => {
                const data = response.data;
                console.log(response.data.email);
            });
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
                    <Link to="/userRequirment" className="nav_items">
                        Generate
                    </Link>
                </div>
                {isLoggedIn ? (
                    <div className="profile">
                        <p className="profile-name">Rukshan</p>
                        <div className="profile-circle" onClick={() => setIsAccountBoxOpen(!isAccountBoxOpen)}>
                            <p className="circle-inner">CV</p>
                        </div>
                        {isAccountBoxOpen && <AccountBox />}
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
