import React, { useState } from 'react';
// Import helper function for email input validation in form
import { validateEmail, completeField } from '../utils/formValidation';
import { Form, Button} from 'react-bootstrap';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Render user input
    const handleInputChange = (e) => {
        // Get the value and name of the input that triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, set the state of either name, email, or message
        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default form submit behavior of refreshing the page
        e.preventDefault()

            // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
        setErrorMessage('It looks like you entered an invlad email address, please try again.');
        // Exit code block to allow user to correct invalid email
        return;
    }
    if (!completeField(name) || !completeField(email) || !completeField(message)) {
        setErrorMessage('Please complete all fields');
        return;
    }
    alert(`Mission accomplished`);

    // Clear all input contents upon form submission
    setName('');
    setEmail('');
    setMessage('');
    };

    return (
        <section>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    {/* <Form.Control type="password" placeholder="Password" /> */}
                    <Form.Control
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="name"
                        placeholder="name"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    {/* <Form.Control type="email" placeholder="Enter email" /> */}
                    <Form.Control 
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Enter your email"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    {/* <Form.Control as="textarea" rows={3} /> */}
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        placeholder="Enter your Message"
                    />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleFormSubmit}>
                    Send
                </Button>
                {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
            </Form>
        </section>
    );
}

export default Contact;