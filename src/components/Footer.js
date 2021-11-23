import React from 'react';

function Footer() {
    return (
        <footer className="bg-dark text-center text-white">
        <div className="container p-2">
            {/* Links  */}
            <section className="mb-2">
                {/* Linkedin */}
                <a className="btn btn-floating m-1" role="button" href="https://github.com/sahhollingsworth" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                {/* Github  */}
                <a className="btn btn-floating m-1" role="button" href="https://www.linkedin.com/in/sarahhollingsworth/" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                {/* Medium */}
                <a className="btn btn-floating m-1" role="button" href="https://medium.com/@sarahholli" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook-f"></i>
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

