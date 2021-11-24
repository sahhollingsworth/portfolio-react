import React, { useState } from 'react';
// Naviagtion and Footer are always rendered 
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
// All pages need to be imported for dynamic rendering
import About from '../pages/About/About';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume/Resume';
import Contact from '../pages/Contact/Contact';


export default function Header() {
    // initialize state variable currentPage to indicate what section a user is on, with default section being About Me
    const [currentPage, setCurrentPage] = useState('About');
    
    // Identify which section to render
    const renderPage = () => {
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        } else if (currentPage === 'Resume') {
            return <Resume />;
        } else if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <About />;
    };

    // Change current page
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* Pass through currentSection & function to change currentSection to Navigation for dynamic us */}
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            <main>
                {renderPage()}
            </main>
            <Footer />
        </div>
    )
}