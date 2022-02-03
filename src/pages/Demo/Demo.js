import React from 'react';
import './Demo.css';

const Demo = () => {
    return (
        <section className="custom-container mobile">
            <div className="main">
            <div className="first">
                <p className="view-text">COURSE</p>
                <h2>JavaScript Fundamentals</h2>
                <h6 className="view-text">View all chapters ></h6>
            </div>
            <div className="second">
                <h6 className="view-text">CHAPTER 4</h6>
                <h2 className="second-text">Callback & Closures</h2>
                <p align="right">
                    <button className="button">Continue</button>
                </p>
            </div>
        </div>
        </section>
    );
};

export default Demo;