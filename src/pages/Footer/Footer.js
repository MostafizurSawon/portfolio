import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Contact from '../Contact/Contact';
import './Footer.css';
import Social from "./Social";
import socialIcon from "./../../images/icons/social-media-big.gif"

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
            <h2 className="text-center my-3">Find Me on Social Media <img className="ms-1 pb-1" src={socialIcon} width="55px" alt="" /></h2>
            
                <Social></Social>
                <h6 className="text-center mt-3">© Copyright by Mostafizur 2022</h6>
            </div>
        </Row>
    );
};

export default Footer;