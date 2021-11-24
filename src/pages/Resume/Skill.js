import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './Resume.css';

// each skill is rendered as a list item in a ul in Resume.js jsx
export function Skill(props) {
    return (
        <ListGroup.Item className="skill-item">
            {props.name}
        </ListGroup.Item>
    )
}