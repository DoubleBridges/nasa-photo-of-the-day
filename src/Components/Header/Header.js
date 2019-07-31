import React from "react"

import './Header.scss'

const logo = 'https://api.nasa.gov/images/logo.png';
const Header = () => {

    return (
        <header className="logo-header">
            <img src={logo} alt="logo"></img>
            <h1>Astronomy Picture of the Day</h1>
        </header>

    )

}

export default Header