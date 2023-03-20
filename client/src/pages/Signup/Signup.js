import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/nav/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Signup.css";
import axios from "axios";

const handleSubmit = (event) => {
    event.preventDefault();
    // get the form data
    const data = new FormData(event.target);
    console.log(data);
    // call your function to send the data
    sendData(data);
};

const sendData = (data) => {
    // if validate
    let formData = new FormData();
    formData.append("firstName", data.fname);
    formData.append("lastName", data.lname);
    formData.append("email", data.email);
    formData.append("password", data.pass);

    axios
        .post("http://localhost/GenUML/dbtest.php", data)
        .then((response) => {
            console.log(response.data);
            // alert("new user added");
        })
        .catch((error) => {
            console.log(error);
            // alert("error occured");
        });
};

const Signup = () => {
    return (
        <div>
            <Navbar />
            <form onSubmit={handleSubmit} className="register-form py-3 px-5 rounded">
                <div className="mb-4">
                    <h2>GenUML</h2>
                    <p>Create an account</p>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="form-outline mb-3">
                        <label className="form-label" htmlFor="fname">
                            First Name
                        </label>
                        <input type={"text"} id="fname" name="fname" className="form-control border border-4 rounded" />
                    </div>
                    <div className="form-outline mb-3">
                        <label className="form-label" htmlFor="lname">
                            Last Name
                        </label>
                        <input type={"text"} id="lname" name="lname" className="form-control border border-4 rounded" />
                    </div>
                </div>
                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="userName">
                        User Name
                    </label>
                    <input type={"text"} id="userName" name="userName" className="form-control border border-4 rounded" />
                </div>
                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="email">
                        Email
                    </label>
                    <input type={"email"} id="email" name="email" className="form-control border border-4 rounded" />
                </div>

                {/* Password fileds */}
                <div className="d-flex justify-content-between">
                    <div className="form-outline mb-3">
                        <label className="form-label" htmlFor="pass">
                            Password
                        </label>
                        <input type={"password"} id="pass" name="pass" className="form-control border border-4 rounded" />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="pass">
                            Confirm Password
                        </label>
                        <input type={"password"} id="confirmPass" className="form-control border border-4 rounded" />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4 px-5">
                    Sign up
                </button>
                {/* Register buttons */}
                <div className="text-center">
                    <p>
                        Already have an account?
                        <Link to="/sign-in">Login</Link>
                    </p>

                    <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                    </div>

                    <a className="btn btn-primary btn-lg btn-block mb-2" style={{ backgroundColor: "#3b5998" }} href="#!" role="button">
                        <i className="fab fa-facebook-f me-2" />
                        Continue with Facebook
                    </a>
                    <a className="btn btn-primary btn-lg btn-block" style={{ backgroundColor: "#55acee" }} href="#!" role="button">
                        <i className="fab fa-google me-2"></i>Continue with Google
                    </a>
                </div>
            </form>
            <Footer />
        </div>
    );
};

export default Signup;
