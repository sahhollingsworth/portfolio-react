import React from 'react';
import resumePDF from '../../images/sarah_hollingsworth_resume_2021-11.pdf';
import { Container, Button, ListGroup } from 'react-bootstrap'; 
import './Resume.css';
import { Skill } from './Skill';

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
        name: "Express"
    },
    {
        name: "Apollo Client"
    },
    {
        name: "Javascript"
    },
    {
        name: "JSX"
    },
    {
        name: "Node"
    },
    {
        name: "React"
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
        name: "Insomnia"
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
        <Container className="py-4">
            {/* containter for skills lists */}
            <div className="row py-2">
                <h3>Experience</h3>
                {/* render list of languages developer has experience with */}
                <div className="col-md-4">
                    <h4>Language</h4>
                    <ListGroup className="list-group-flush">
                        {
                            languages.map((name) => (
                                <Skill name={skill.name} />
                            ))
                        }
                    </ListGroup>
                </div>
                {/* render list of database technologies developer has experience with */}
                <div className="col-md-4">
                    <h4>Database</h4>
                    <ListGroup className="list-group-flush">
                        {
                            databases.map((name) => (
                                <Skill name={skill.name} />
                            ))
                        }
                    </ListGroup>
                </div>
                {/* render list of technologies developer has experience with */}
                <div className="col-md-4">
                    <h2>Technology</h2>
                    <ListGroup className="list-group-flush">
                        {
                            technologies.map((name) => (
                                <Skill name={skill.name} />
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