import React from 'react';
import resumePDF from '../../images/sarah_hollingsworth_resume_2021-11.pdf';
import { Skill } from './Skill';
import { Container, Button, ListGroup } from 'react-bootstrap'; 
import './Resume.css';

// Languages, Libraries, and Packages
const languages = [
    {
        name: "JQuery"
    },
    {
        name: "GraphQL"
    },
    {
        name: "JWT"
    },
    {
        name: "Javascript"
    },
    {
        name: "JSX"
    },
    {
        name: "React"
    },
    {
        name: "Python"
    },
    {
        name: "JSON"
    },
    {
        name: "HTML"
    },
    {
        name: "CSS"
    },
]

const technologies = [
    {
        name: "Progressive Web Apps"
    },
    {
        name: "Heroku"
    },
    {
        name: "MongoDB Atlas"
    },
    {
        name: "GitHub"
    },
    {
        name: "Bootstrap"
    },
    {
        name: "Bulma"
    },
    {
        name: "REST APIs"
    },
    {
        name: "Express"
    },
    {
        name: "Apollo Client"
    },
    {
        name: "Node"
    }
]

// Database & Database related
const databases = [
    {
        name: "MongoDB"
    },
    {
        name: "MySQL"
    },
    {
        name: "Indexed Database API"
    }
]

function Resume() {
    return (
        <Container className="py-4 text-center">
            {/* containter for skills lists */}
            <h3 className="display-6 py-2">Experience</h3>
            <div className="row py-3 justify-content-around">
                {/* render list of languages developer has experience with */}
                <div className="col-md-3 mx-1">
                    <h4 className="py-1 font-weight-bold">LANGUAGE</h4>
                    <ListGroup className="list-group-flush skill-group">
                        {
                            languages.map((language) => (
                                <Skill name={language.name} />
                            ))
                        }
                    </ListGroup>
                </div>
                {/* render list of database technologies developer has experience with */}
                <div className="col-md-3 mx-1">
                    <h4 className="py-1 font-weight-bold">DATABASE</h4>
                    <ListGroup className="list-group-flush skill-group">
                        {
                            databases.map((database) => (
                                <Skill name={database.name} />
                            ))
                        }
                    </ListGroup>
                </div>
                {/* render list of technologies developer has experience with */}
                <div className="col-md-3 mx-1">
                    <h4 className="py-1 font-weight-bold">TECHNOLOGY</h4>
                    <ListGroup className="list-group-flush skill-group">
                        {
                            technologies.map((technology) => (
                                <Skill name={technology.name} />
                            ))
                        }
                    </ListGroup>
                </div>
            </div>
            {/* end skills lists container */}
            <div className="row py-2" id="container-btn-resume">
                <a href={resumePDF}>
                    <Button id="btn-resume">DOWNLOAD RESUME</Button>
                </a>
            </div>
        </Container>
    );

}

export default Resume;