import React from "react";
import "./SignIn.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../../components/nav/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import AlertMsg from "../../components/alert/AlertMsg";
import Loading from "../../components/alert/Loading";

const SignIn = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [errorMsg, setErrorMsg] = useState();
    const [showLoading, setShowLoading] = useState(false);
    const navigate = useNavigate();

    const isFormValid = (data) => {
        let isValid = true;
        // check is empty
        for (const value of data.values()) {
            if (value.trim().length == 0) {
                isValid = false;
            }
        }
        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // get the form data
        const data = new FormData(event.target);
        // check validation
        if (isFormValid(data)) {
            sendData(data);
        } else {
            alert("invalid inputs");
        }
    };

    const sendData = (data) => {
        setShowLoading(true);
        const url = `${process.env.REACT_APP_API}/Login_Register/login.php`;
        axios
            .post(url, data)
            .then((response) => {
                setShowLoading(false);
                if (response.data) {
                    sessionStorage.setItem("userData", JSON.stringify(response.data)); // create session
                    navigate("/");
                } else {
                    setErrorMsg("Invalid Credentials.. Pls try again..");
                    setShowAlert(true);
                }
            })
            .catch((error) => {
                console.log(error);
                setShowLoading(false);
                setErrorMsg("Error occured..Pls try again..");
                setShowAlert(true);
            });
    };
    return (
        <div>
            <Navbar />
            {showAlert && <AlertMsg type="warning" text={errorMsg} setShowAlert={setShowAlert} />}
            {showLoading && <Loading msg="Logging" />}
            <form onSubmit={handleSubmit} className="login-form p-4 rounded">
                <div className="mb-4">
                    <h2>GenUML</h2>
                    <p>Login to your account</p>
                </div>

                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="email">
                        <i className="fa-regular fa-envelope"></i> Email:
                    </label>
                    <input type={"email"} id="email" name="email" className="form-control border border-4 rounded" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="pass">
                        <i class="fa fa-lock"></i> Password
                    </label>
                    <input type={"password"} id="pass" name="pass" className="form-control border border-4 rounded" />
                </div>

                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input
                                className="form-check-input border border-2"
                                type={"checkbox"}
                                defaultValue
                                id="rememberMe"
                                defaultChecked={false}
                            />
                            <label className="form-check-label" htmlFor="rememberMe">
                                {" "}
                                Remember me{" "}
                            </label>
                        </div>
                    </div>
                    <div className="col">
                        {/* Simple link */}
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4">
                    Sign in
                </button>
                {/* Register buttons */}
                <div className="text-center">
                    <p>
                        Don't have an account?
                        <Link to="/sign-up">Register</Link>
                    </p>

                    <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                    </div>

                    <a className="btn btn-primary btn-lg btn-block mb-2" style={{ backgroundColor: "#3b5998" }} href="#!" role="button">
                        <i className="fab fa-facebook-f me-2" />
                        Sign in with Facebook
                    </a>
                    <a className="btn btn-primary btn-lg btn-block" style={{ backgroundColor: "#55acee" }} href="#!" role="button">
                        <i className="fab fa-google me-2"></i>Sign in with Google
                    </a>
                </div>
            </form>
            <Footer />
        </div>
    );
};

export default SignIn;
