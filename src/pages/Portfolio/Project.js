import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Portfolio.css';

function Project(props) {
    return (
        <Card className="mx-5 my-5 p-1 project-cards" style={{ width: '45rem'}}>
            <Card.Img src={props.image} alt="Project image" />
            <Card.ImgOverlay>
            <Card.Title>{props.name}</Card.Title>
            <a href={props.repository} target='_blank' rel='noreferrer'>
                <Button className='button-repository'>Repository</Button>
            </a>
            <a href={props.production} target='_blank' rel='noreferrer'>
                <Button lassName='button-development'>Deployed App</Button>
            </a>
            </Card.ImgOverlay>
        </Card>
    );
}

export default Project;