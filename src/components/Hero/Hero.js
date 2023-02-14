import React from 'react';
import './Hero.css';
import headerBg from "../../assets/island_bg.jpg";
import mob from "../../assets/mob.jpg";

const openResume = () => {
    window.open("https://drive.google.com/file/d/1wC8uzaD7gPID-yDb1nLe8QDnrYD8Inme/view?usp=sharing", "_blank");
};

const Hero = () => (
    <div className = "newHeader" id = 'about'>
        <div className = "introduction">
            <h1 className = "intro">Hello, my name is <span className = "name">Isabelle Huang</span>.</h1>
            <p>I am a Computer Engineering student at the University of Waterloo, interested in software development and <a className = "mob" href = {mob} target="_blank" rel="noopener noreferrer">Mob Psycho</a>. <br />
            Last updated: Feb. 13, 2023</p>
            <button onClick={openResume} class="openResume">View Resume</button>
        </div>
        <div classname = "lower_half">
            <img src = {headerBg} alt = "acnh_island" className = "background"/>
        </div>
    </div>
)

export default Hero