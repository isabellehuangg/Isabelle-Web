import React from 'react';
import './Experience.css';
import Fruit from '../../assets/fruit.jpg';

const Experience = () => (
  <div className="Experience" id = 'experience'>
    <span className = "title-container">
        <h1 className = 'Title'>Experience</h1>
        <img src = {Fruit} className = 'Fruit' alt = "Fruit person"/>
    </span>
    <p>I have learned to use various languages, frameworks, and developer tools through different jobs and non-profit roles. For a more detailed account of these experiences and more, check out my resume!</p>
    <div className = "experiences">
        <div className='experience'>
            <p className = "exp_title">Full Stack Developer</p>
            <p className = "location"><a href = "https://www.uworbital.com/" className = "links">UW Orbital Satellite Design Team</a></p>
            <p className = "time">Sept. 2022 - Present</p>
            <p className = "description">
                <li>Developed and improved frontend and backend frameworks of the ARO Webapp using React, Figma, and Firebase</li>
            </p>
        </div>
        <div className='experience'>
            <p className = "exp_title">Coding & 3D Printing Instructor</p>
            <p className = "location"><a href = "https://tacsports.ca/" className = "links">TAC Sports</a></p>
            <p className = "time">July 2022 - Aug. 2022</p>
            <p className = "description">
                <li>Taught programming fundementals in Python & Scratch to 50+ young learners</li>
            </p>
        </div>
        <div className='experience'>
            <p className = "exp_title">Fellow</p>
            <p className = "location" ><a href = "https://www.shad.ca/" className = "links">Shad Canada</a></p>
            <p className = "time">July 2021</p>
            <p className = "description">
                <li>Completed the Shad program virtually at the York University campus</li>
            </p>
        </div>
    </div>
  </div>
)

export default Experience;