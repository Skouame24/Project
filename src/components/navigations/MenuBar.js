import React from 'react'

import './MenuBar.css'

const MenuBar = () => {
    return (
        <nav className="header">
            <div className="nav-wrapper">
                <a className="logo" href='/'>Logo<span>S</span></a>
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

                <ul className="menu">
                    <li><a href="/">Acceuil</a></li>
                    <li><a href="/AboutUs">A propos</a></li>
                    <li><a href="/ContactUs">Contactez nous</a></li>                
                </ul>
            </div>
        </nav>
    )
}

export default MenuBar;