import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer class="bg-light text-center text-lg-start">
            <div class="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                © {new Date().getFullYear()} Copyright: <Link to="/" className='text-dark' >Team Syndicate</Link>
            </div>
        </footer>
    )
}

export default Footer
