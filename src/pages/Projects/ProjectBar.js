import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import about from "./../../images/icons/developer-flat.gif";
import home from "./../../images/icons/home.gif";
import blog from "./../../images/icons/blogger-logotype.png";
import contact from "./../../images/icons/phone.gif";

const ProjectBar = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <Nav.Link>
            <NavLink className={(nav)=> (nav.isActive ?  "activeStyle" : 'custom' )} to="/#fullstack">
            <img className="me-2 pb-1" src={home} width="20px" alt="" />
                        MERN Stack
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
        </div>
    );
};

export default ProjectBar;