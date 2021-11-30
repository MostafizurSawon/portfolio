import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Contact from '../Contact/Contact';
import './Footer.css';

const Footer = () => {
    return (
        <Row className="w-100 footer pt-5">
            <Col className="footer-half" sm= {6}>
            </Col>
            <Col className="" sm= {6}>
                <h3 className="text-center bg-light py-3">Contact Me</h3>
                <Contact></Contact>
            </Col>
            
            
            <div className="bg-light py-3 d-flex justify-content-between px-5 align-items-center">
                <h6>© Copyright by Mostafizur 2021</h6>
                <div className="social-icon text-dark">
                    Find me On   
                    <a href="https://www.facebook.com/s4sawon/"><i className="fab fa-facebook mx-3 icon"></i></a>
                    <a href="https://www.linkedin.com/in/mostafizur-rahman-sawon/"><i class="fab fa-linkedin me-3"></i></a>
                    <a href="https://github.com/MostafizurSawon"><i class="fab fa-github me-3"></i></a>
                </div>
            </div>
        </Row>
    );
};

export default Footer;