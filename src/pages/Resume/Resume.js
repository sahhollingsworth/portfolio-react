import React from 'react';
import resumePDF from '../../images/sarah_hollingsworth_resume_2021-11.pdf';
import { Container, Button } from 'react-bootstrap'; 
import './Resume.css';
// import Skill from './Skill';

// create skills to pass through to skill function?

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
            <div className="row py-2">
                <h3>Experience</h3>
                <div className="col-md-4">
                    <h4>Language</h4>
                    <ul className="list-group list-group-flush">
                        {
                            languages.map((name) => (
                                <Skill name={skill.name} />
                            ))
                        }
                    </ul>
                </div>
                <div className="col-md-4">
                    <h4>Database</h4>
                    <ul className="list-group list-group-flush">
                        {
                            databases.map((name) => (
                                <Skill name={skill.name} />
                            ))
                        }
                    </ul>
                </div>
                <div className="col-md-4">
                    <h2>Technology</h2>
                    <ul className="list-group list-group-flush">
                        {
                            technologies.map((name) => (
                                <Skill name={skill.name} />
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="row py-2" id="container-btn-resume">
                <a href={resumePDF} target="_blank" rel="noreferrer">
                    <Button id="btn-resume">DOWNLOAD RESUME</Button>
                </a>
            </div>
        </Container>
    );

}

export default Resume;