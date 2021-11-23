import React from 'react';
import headshot from '../images/headshot_about.png'; 

function About() {
    return (
        <section className="row">
            <div className="col-2">
                <h1 className="display-3">ABOUT</h1>
            </div>
            <div className="col-4">
                <img src={headshot} alt="Sarah Hollingsworth" className="img-thumbnail" id="img-me" />
            </div>
            <div className="col-6">
                <p className="px-2">Soon-to-be web developer with a background in consumer support, operations, and product management for web and mobile apps. I enjoy approaching application developement from a wholelistic perspective, prioritizing user experience, product market fix, as well as low impact and sustainable infrastructure for growth. This an exploration of React to make a simple portfolio, but stayed tuned for a new portfolio soon!.
                </p>
            </div>
        </section>
    );
}



export default About;