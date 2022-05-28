import React from 'react'
import logo from "../images/Logo.png"
import menuIcon from "../images/menu-icon.png"
export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="Logo" />
            <div>
                <a href="#">About</a>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Testimonials</a>
                <a href="#">Help</a>

            </div>
            <div className='sign-in-out-btns'>
                <a href="#" className='sign-in'>Sign In</a>
                <a href="#" className='sign-up'>Sign Up</a>
                
            </div>
            <img className='menuIcon' src={menuIcon} alt="" />
        </nav>
    )
}
