import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/nav/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './Signup.css';

const Signup = () => {
    return (
        <div>
            <Navbar />
            <form className="register-form py-3 px-5 rounded">
                <div className='mb-4'>
                    <h2>GenUML</h2>
                    <p>Create an account</p>
                </div>

                <div className='d-flex justify-content-between'>
                    <div className='form-outline mb-3'>
                        <label className='form-label' htmlFor='fname'>First Name</label>
                        <input type={'text'} id="fname" className='form-control border border-4 rounded' />
                    </div>
                    <div className='form-outline mb-3'>
                        <label className='form-label' htmlFor='lname'>Last Name</label>
                        <input type={'text'} id="lname" className='form-control border border-4 rounded' />
                    </div>
                </div>
                <div className='form-outline mb-3'>
                    <label className='form-label' htmlFor='userName'>User Name</label>
                    <input type={'text'} id="userName" className='form-control border border-4 rounded' />
                </div>
                <div className='form-outline mb-3'>
                    <label className='form-label' htmlFor='email'>Email</label>
                    <input type={'email'} id="email" className='form-control border border-4 rounded' />
                </div>

                {/* Password fileds */}
                <div className='d-flex justify-content-between'>
                    <div className='form-outline mb-3'>
                        <label className='form-label' htmlFor='pass'>Password</label>
                        <input type={'password'} id="pass" className='form-control border border-4 rounded' />
                    </div>
                    <div className='form-outline mb-4'>
                        <label className='form-label' htmlFor='pass'>Confirm Password</label>
                        <input type={'password'} id="pass" className='form-control border border-4 rounded' />
                    </div>
                </div>

                <button type="button" className="btn btn-primary btn-block mb-4 px-5">Sign up</button>
                {/* Register buttons */}
                <div className="text-center">
                    <p>Already have an account?
                        <Link to="/sign-in">Login</Link>
                    </p>

                    <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                    </div>

                    <a className="btn btn-primary btn-lg btn-block mb-2" style={{ backgroundColor: "#3b5998" }} href="#!"
                        role="button">
                        <i className="fab fa-facebook-f me-2" />Continue with Facebook
                    </a>
                    <a className="btn btn-primary btn-lg btn-block" style={{ backgroundColor: "#55acee" }} href="#!"
                        role="button">
                        <i className="fab fa-google me-2"></i>Continue with Google</a>
                </div>
            </form>
            <Footer />
        </div>
    )
}

export default Signup