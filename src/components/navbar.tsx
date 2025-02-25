import React, { useState } from 'react';
import { NavLink } from 'react-router';
import '../styles/NavBar.css';
import Switch from '@mui/material/Switch';

export const NavBar = () => {
    //const [darkMode, setDarkMode] = useState(false);

    return (
        // <nav className={`navbar navbar-expand-lg ${darkMode ? 'bg-dark' : 'bg-body-tertiary'}`}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Inicio</NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/info">Información</NavLink>
                        </li>
                
                    </ul>
                    {/* Switch para activar/desactivar el modo oscuro */}
                    {/* <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} /> */}
                </div>
            </div>
        </nav>
    );
};
