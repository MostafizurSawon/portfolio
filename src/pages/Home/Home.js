import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Demo from './../Demo/Demo';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <Projects></Projects>
            
            {/* <Demo></Demo> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;