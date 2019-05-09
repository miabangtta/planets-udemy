import React from 'react';


import './header.css';

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <a href="/">
                    Star DB
                </a>
            </h3>
            <ul className="d-flex header-list">
                <li className="header-item">
                    <a href="/">
                        People
                    </a>
                </li>
                <li className="header-item">
                    <a href="/">
                        Planets
                    </a>
                </li>
                <li className="header-item">
                    <a href="/">
                        Starships
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default Header;