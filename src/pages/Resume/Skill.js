import React from 'react';
import { ListGroup } from 'react-bootstrap';

// each skill is rendered as a list item in a ul in Resume.js jsx
export function Skill(props) {
    return (
        <ListGroup.Item>
            {props.name}
        </ListGroup.Item>
    )
}