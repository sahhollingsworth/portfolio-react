import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import './Navigation.css';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <Navbar id="header-nav" className="justify-content-between flex-wrap py-3 toggle-justify">
                <h1 className="display-3 px-4" id="brand">SARAH HOLLINGSWORTH</h1>
                <Nav className="px-3 fs-6" id="nav-pages">
                    <Nav.Link href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'activated px-3' : 'inactive px-3'}>
                        ABOUT ME
                    </Nav.Link>
                    <Nav.Link href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'activated px-3' : 'inactive px-3'}>
                        PORTFOLIO
                    </Nav.Link>
                    <Nav.Link href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'activated px-3' : 'inactive px-3'}>
                        RESUME
                    </Nav.Link>
                    <Nav.Link href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'activated px-3' : 'inactive px-3'}>
                        CONTACT
                    </Nav.Link>
                </Nav>
        </Navbar>
    )
}

export default Navigation;