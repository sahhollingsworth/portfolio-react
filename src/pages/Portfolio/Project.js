import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Portfolio.css';

function Project(props) {
    return (
        <Card className="mx-5 my-5 p-1 project-card" style={{ width: '45rem'}}>
            <Card.Img src={props.image} alt="Project image" />
            <Card.ImgOverlay>
                <div className="project-details p-2">
                    <Card.Title className="project-title display-4">{props.name}</Card.Title>
                    {/* <a href={props.repository} target='_blank' rel='noreferrer'>
                        <Button className='px-1 mx-1 button-project btn-primary-outline'>Repository</Button>
                    </a> */}
                    <Button className='px-1 mx-1 button-project btn-primary-outline' href={props.repository} target='_blank'>Repository</Button>
                    <Button className='px-1 mx-1 button-project btn-primary-outline' href={props.production} target='_blank'>Deployed App</Button>
                    {/* <a href={props.production} target='_blank' rel='noreferrer'>
                        <Button className='px-1 mx-1 button-project btn-primary-outline'>Deployed App</Button>
                    </a> */}
                </div>
            </Card.ImgOverlay>
        </Card>
    );
}

export default Project;