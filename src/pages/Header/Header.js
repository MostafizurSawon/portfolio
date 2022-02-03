import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="light" className="justify-content-end" sticky="top" collapseOnSelect expand="lg" >
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
                                  Home
                        </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                        <NavLink className={(nav)=> (nav.isActive ?  "activeStyle" : 'custom' )} to="/blogs">
                                  Blogs
                        </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                        <NavLink  className={(nav)=> (nav.isActive ?  "activeStyle" : "custom" )} to="/about">
                                  About
                        </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                        <NavLink  className={(nav)=> (nav.isActive ?  "activeStyle" : "custom" )} to="/contact">
                                  Contact
                        </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                        <NavLink  className={(nav)=> (nav.isActive ?  "activeStyle" : "custom" )} to="">
                        <a href="https://drive.google.com/file/u/6/d/1oruHV2BfMVWSCA1J8POvleI4FGTVeUKJ/view?usp=sharing&usp=embed_facebook" target="_blank"><Button variant="success">My Resume</Button></a>
                        </NavLink>
                        </Nav.Link>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;