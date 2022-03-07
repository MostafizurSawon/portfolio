import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import about from "./../../images/icons/developer-flat.gif";
import home from "./../../images/icons/home.gif";
import blog from "./../../images/icons/blogger-logotype.png";
import contact from "./../../images/icons/phone.gif";

const Header = () => {
    return (
        <>
            <Navbar bg="" variant="light" className="justify-content-end navbar" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand>
                    <Nav.Link> 
                        <NavLink className={(nav)=> (nav.isActive ?  "activeStyle logo" : 'custom logo' )} to="/">
                            M
                        </NavLink>
                    </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link>
                        <NavLink className={(nav)=> (nav.isActive ?  "activeStyle" : 'custom' )} to="/">
                        <img className="me-2 pb-1" src={home} width="20px" alt="" />
                                  Home
                        </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                        <NavLink className={(nav)=> (nav.isActive ?  "activeStyle" : 'custom' )} to="/blogs">
                        <img className="me-2 pb-1" src={blog} width="20px" alt="" />
                                  Blogs
                        </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                        <NavLink  className={(nav)=> (nav.isActive ?  "activeStyle" : "custom" )} to="/about">
                        <img className="me-2 pb-1" src={about} width="35px" alt="" />
                        About
                        </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                        <NavLink  className={(nav)=> (nav.isActive ?  "activeStyle" : "custom" )} to="/contact">
                        <img className="me-2 pb-1" src={contact} width="25px" alt="" />
                        Contact
                        </NavLink>
                        </Nav.Link>
                        {/* <Nav.Link>
                        <NavLink  to="/resume"></NavLink> */}
                        <a className="resume_button ms-3" href="https://drive.google.com/file/u/6/d/1oruHV2BfMVWSCA1J8POvleI4FGTVeUKJ/view" target="_blank"><i className="fas fa-cog fa-spin me-2"></i>My Resume</a>
                        
                        {/* </Nav.Link> */}
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;