import React, { useState } from "react";
// Naviagtion and Footer are always rendered 
import Navigation from "./Navigation";
import Footer from "./Footer";
// All pages need to be imported for dynamic rendering
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";


function Contents() {
    // initialize state variable currentPage to indicate what section a user is on, with default section being About Me
    const [currentSection, setCurrentSection] = useState('About');
    
    // Identify which section to render
    const renderSection = () => {
        if (currentSection === 'Portfolio') {
            return (<Portfolio />);
        } else if (currentSection === 'Resume') {
            return (<Resume />);
        } else if (currentSection === 'Contact') {
            return (<Contact />);
        } else 
            return (<About />);
    };

    // Change current page
    const sectionChange = (section) => setCurrentSection(section);

    return (
        <div>
            <header>
                {/* Pass through currentSection & function to change currentSection to Navigation for dynamic us */}
                <Navigation currentSection={currentSection} sectionChange={sectionChange} />
            </header>
            <main>
                {renderSection()}
            </main>
            <Footer />
        </div>
    );
}

export default Contents;