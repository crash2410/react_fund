import React from 'react';
import {Link} from "react-router-dom";
import './NavBar.css';

// Компонент NavBar представляет собой навигационную панель (меню) для веб-приложения.
const NavBar = () => {
    return (
        <nav>
            <ul className="menu">
                <li className="menu-item">
                    <Link to="/" className="menu-link">Home</Link>
                </li>
                <li className="menu-item">
                    <Link to="/Posts" className="menu-link">Posts</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;