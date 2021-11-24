import React from 'react';
// import Icons
import { IconContext } from "react-icons";
import { BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa';

import './Footer.css';


function Footer() {
    return (
        <footer className="text-center text-white">
            <div className="container p-2">
                <section className="pt-1">
                    <IconContext.Provider value={{ style: {height: "2em", width: "2em"}, className: "global-class-name" }}>
                        {/* Linkedin */}
                        <a className="btn btn-floating m-1" role="button" href="https://www.linkedin.com/in/sarahhollingsworth/" target="_blank" rel="noreferrer">
                            <FaLinkedin />
                        </a>
                        {/* Github  */}
                        <a className="btn btn-floating m-1" role="button" href="https://github.com/sahhollingsworth" target="_blank" rel="noreferrer">
                            <BsGithub />
                        </a>
                        {/* Medium */}
                        <a className="btn btn-floating m-1" role="button" href="https://medium.com/@sarahholli" target="_blank" rel="noreferrer">
                            <FaMedium />
                        </a>
                    </IconContext.Provider>
                </section>
            </div>
        </footer>
    )
}

export default Footer;