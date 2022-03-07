import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Contact from '../Contact/Contact';
import './Footer.css';
import Social from "./Social";

const Footer = () => {
    return (
        <Row className="w-100 footer pt-5">
            <Col className="footer-half" sm= {6}>
            </Col>
            <Col className="" sm= {6}>
                <h3 className="text-center bg-light py-3">Contact Me</h3>
                <Contact></Contact>
            </Col>
            
            
            <div className="bg-light">
            <h6 className="text-center">Find Me on Social Media</h6>
                <Social></Social>
                <h6 className="text-center">© Copyright by Mostafizur 2022</h6>
            </div>
        </Row>
    );
};

export default Footer;