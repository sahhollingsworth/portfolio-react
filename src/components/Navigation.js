import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>SARAH HOLLINGSWORTH</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                        About Me
                    </Nav.Link>
                    <Nav.Link href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                        Portfolio
                    </Nav.Link>
                    <Nav.Link href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                        Resume
                    </Nav.Link>
                    <Nav.Link href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                        Contact
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;

        // <nav>
        //     <div>
        //     <h1>SARAH HOLLINGSWORTH</h1>
        //     </div>
        //     <div>
        //         <ul>
        //             <li>
        //                 <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? "active" : "inactive"}>
        //                     About Me
        //                 </a>
        //             </li>
        //             <li> 
        //                 <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? "active" : "inactive"}>
        //                     Portfolio
        //                 </a>
        //             </li>
        //             <li>
        //                 <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? "active" : "inactive"}>
        //                     Resume
        //                 </a>
        //             </li>
        //             <li>
        //                 <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? "active" : "inactive"}>
        //                     Contact
        //                 </a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>