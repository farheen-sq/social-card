import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import './Navbar.css'

export default function Navbar(): JSX.Element {
    return <nav className='nav'>
        <Link to={ROUTES.HOME} className="site-title">Home</Link>
        <Link className="searchicon" to={ROUTES.SEARCH}>Search</Link>
    </nav>
}
