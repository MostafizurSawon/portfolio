import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProjectBar from '../Projects/ProjectBar';
import Projects from '../Projects/Projects';
import Demo from './../Demo/Demo';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <ProjectBar></ProjectBar> */}
            <Projects></Projects>
            
            {/* <Demo></Demo> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;