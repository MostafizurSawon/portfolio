import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Contact from './Contact';

const ContactLink = () => {
    return (
        <Row xs={1} md={3} className="my-2 w-100 d-flex justify-content-center align-items-center gy-4">
                <Col>
                <h2 className="text-center bg-light py-3">Contact Me</h2>
                <Contact></Contact>
                </Col>
                <Col>
                <img className="w-100" src="https://image.freepik.com/free-vector/illustration-e-mail-protection-concept-e-mail-envelope-with-file-document-attach-file-system-security-approved_1150-41788.jpg" alt="" />
                </Col>
            
        </Row>
    );
};

export default ContactLink;