import React from 'react';
import about from '../../images/about.jpg';

const About = () => {
    return (
        <div className="flex items-center">
            <div className="flex-1 ml-20">
              <h2 className="text-5xl font-bold font-sans text-left">ABOUT US</h2>
              <p className="font-sans text-left">We are here for helping you to reach you in your cherished goal.If you want to more you can click to learn more button</p>
              <button className="bg-indigo-500 p-2 text-white text-bold rounded float-left">Learn More</button>
            </div>
            <div className="flex-1">
               <img src={about} alt="" />
            </div>
        </div>
    );
};

export default About;