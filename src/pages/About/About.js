import React from 'react';
import headshot from '../../images/headshot_about.png';
import { Container} from 'react-bootstrap';
import './About.css';

function About() {
    return (
        <Container className="py-4">
            <section className="row py-3 justify-content-evenly">
                <div className="col-4 d-flex align-items-center">
                    <img src={headshot} alt="Sarah Hollingsworth" className="img-thumbnail" id="headshot" />
                </div>
                <div className="col-6 py-2 d-flex align-items-center">
                    <p className="px-2 py-2 my-2 fs-5" id="about-desc">Soon-to-be web developer with a background in consumer support, operations, and product management for web and mobile apps. I enjoy approaching application developement from a wholelistic perspective, prioritizing user experience, product market fix, as well as low impact and sustainable infrastructure for growth. This an exploration of React to make a simple portfolio, but stayed tuned for a new portfolio soon!.
                    </p>
                </div>
            </section>
        </Container>
    );
}

export default About;