import React, { useState } from "react";
// Naviagtion and Footer are always rendered 
import Navigation from "./Navigation";
import Footer from "./Footer";
// All pages need to be imported for dynamic rendering
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";


export default function Contents() {
    // initialize state variable currentPage to indicate what section a user is on, with default section being About Me
    const [currentPage, setCurrentPage] = useState('About');
    
    // Identify which section to render
    const renderPage = () => {
        if (currentPage === 'Portfolio') {
            return (<Portfolio />);
        } else if (currentPage === 'Resume') {
            return (<Resume />);
        } else if (currentPage === 'Contact') {
            return (<Contact />);
        } else 
            return (<About />);
    };

    // Change current page
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <header>
                {/* Pass through currentSection & function to change currentSection to Navigation for dynamic us */}
                <Navigation currentPage={currentPage} sectionChange={handlePageChange} />
            </header>
            <main>
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
}