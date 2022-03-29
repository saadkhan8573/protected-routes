import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul>
                <NavLink to="/"> <li>Home</li></NavLink>
                <NavLink to="/about"> <li>About</li></NavLink>
                <NavLink to="/login"> <li>Login</li></NavLink>

            </ul>
        </div>
    )
}

export default Navbar
