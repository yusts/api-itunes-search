import React from 'react';
import logo from './logopgs.png'
import "./Header.css";

const Header = () => {
    return (
        <div className="tl">
            <div className="header">
                <img src={logo} alt='logo' />
            </div>
            
        </div>
    );
}

export default Header;