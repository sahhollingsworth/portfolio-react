import React from 'react';
// Images for social media links
import github from '../images/logo_github.png';
import linkedIn from '../images/logo_linkedin.png';
import medium from '../images/logo_ medium.png';

function Footer() {
    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-2">
                {/* Links  */}
                <section className="mb-2">
                    {/* Linkedin */}
                    <a className="btn btn-floating m-1" role="button" href="https://github.com/sahhollingsworth" target="_blank" rel="noreferrer">
                        <img src={github} alt="Github logo" className="img-thumbnail"/>
                    </a>
                    {/* Github  */}
                    <a className="btn btn-floating m-1" role="button" href="https://www.linkedin.com/in/sarahhollingsworth/" target="_blank" rel="noreferrer">
                        <img src={linkedIn} alt="LinkedIn logo" className="img-thumbnail"/>
                    </a>
                    {/* Medium */}
                    <a className="btn btn-floating m-1" role="button" href="https://medium.com/@sarahholli" target="_blank" rel="noreferrer">
                        <img src={medium} alt="Medium blogsite logo" className="img-thumbnail"/>
                    </a>
                </section>
                {/* end Links  */}
                {/* Copyright */}
                <div className="text-center text-muted">
                    <div>&copy Sarah Hollingsworth 2021</div>
                </div>
                {/* end Copyright */}
            </div>
        </footer>
    )
}

export default Footer;

