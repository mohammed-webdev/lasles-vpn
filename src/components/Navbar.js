import React, { useState } from 'react'
import logo from "../images/Logo.png"
import menuIcon from "../images/menu-icon.png"
import Layer from './Layer'
export default function Navbar() {
    const [changeClass, setChangeClass] = useState("layer")

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
            <img onClick={() => setChangeClass("cover")} className='menuIcon' src={menuIcon} alt="" />
            <Layer changeClass={changeClass} />
        </nav>
    )
}
