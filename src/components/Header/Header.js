import React from 'react';
import logo from '../../logo.png';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav-container'>
            <div className='logo-container'>
                <img className='logo' src={logo} alt="" />
                <span className='Explore-bd'>Explore BD</span>
            </div>
            <div>
                <a href="./home">Home</a>
                <a href="./home">Our Service</a>
                <a href="./home">Contact Us</a>
                <a href="./home">About us</a>
            </div>
        </nav>
    );
};

export default Header;