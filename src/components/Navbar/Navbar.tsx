import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar(): JSX.Element {
    return <nav className='nav'>
        <Link to='/' className="site-title">Home</Link>
        <Link className="searchicon" to="/search">Search</Link>
    </nav>
}
