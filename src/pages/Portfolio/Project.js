import React from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import './Portfolio.css';

function Project(props) {
    return (
        <Card className="mx-5 my-5 p-1 project-card" style={{ width: '45rem'}}>
            <Card.Img src={props.image} alt="Project image" />
            <Card.ImgOverlay>
                <div className="project-details p-2">
                    <Card.Title className="project-title display-5 pl-3 ml-2">{props.name}</Card.Title>
                    <ButtonGroup vertical className="pt-2">
                        <Button className='pl-3 mx-1 py-2 my-2 button-project btn-primary-outline' href={props.repository} target='_blank' variant="outline-light" size="lg">Repository</Button>
                        <Button className='pl-3 mx-1 py-2 my-2 button-project btn-primary-outline' href={props.production} target='_blank' variant="outline-light" size="lg">Deployed App</Button>
                    </ButtonGroup>
                </div>
            </Card.ImgOverlay>
        </Card>
    );
}

export default Project;