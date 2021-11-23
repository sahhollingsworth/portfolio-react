import React from 'react';
import './Navigation.css';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <nav>
            <div>
            <h1>SARAH HOLLINGSWORTH</h1>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? "active" : "inactive"}>
                            About Me
                        </a>
                    </li>
                    <li> 
                        <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? "active" : "inactive"}>
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? "active" : "inactive"}>
                            Resume
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? "active" : "inactive"}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;