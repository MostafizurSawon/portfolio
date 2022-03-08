import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProjectBar from '../Projects/ProjectBar';
import Projects from '../Projects/Projects';
import Demo from './../Demo/Demo';
import Skill from './Skill';
import "./Skill.css";


const Home = () => {
    return (
        <>
        <div className="home">
            <Banner></Banner>
            <Skill></Skill>
            <ProjectBar></ProjectBar>
            {/* <Projects></Projects> */}
            
            {/* <Demo></Demo> */}
            </div>
            <Footer></Footer>
        
        </>
    );
};

export default Home;