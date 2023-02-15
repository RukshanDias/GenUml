import React from 'react';
import './Navbar.css'
import { useState, useEffect } from 'react';
import AccountBox from '../accountBox/AccountBox';

function Navbar(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAccountBoxOpen, setIsAccountBoxOpen] = useState(false);

    useEffect(() => {
        setIsLoggedIn(props.isLogin);
        console.log("user logged -> " + props.isLogin)
    }, []);

    return (
        <div className='navbar'>
            <div className='left'>GenUML</div>
            <div className='right'>
                <div className='about'>About</div>
                <div className='generate'>Generate</div>

                {isLoggedIn ? (
                    <React.Fragment>
                        <div className="profile-circle" onClick={() => setIsAccountBoxOpen(!isAccountBoxOpen)}>
                            <p className="circle-inner">CV</p>
                        </div>
                        {isAccountBoxOpen && <AccountBox />}
                    </React.Fragment>
                ) : (
                    < div className='login'>Login</div>
                )}

            </div>
        </div >
    )
}

export default Navbar
