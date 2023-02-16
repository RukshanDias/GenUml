import React from 'react'
import './AccountBox.css'
import { Link } from 'react-router-dom'

const AccountBox = () => {
  return (
    <div className='profile-options'>
      <ul>
        <li>Account</li>
        <li>Settings</li>
        <li>
          <Link to="/sign-in" className='router-link'>Logout</Link>
        </li>
      </ul>
    </div>
  )
}

export default AccountBox
