import React from 'react';
import './Connect.css';
import Airplane from '../../assets/airline.png';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Connect = () => (
  <div className="Connect" id = 'contact'>
    <div className="Content">
        <hr class = "new1"/>
        <div className="title-container">
          <h1 className = "Title">Contact Me</h1>
          <img src={Airplane} className="airplane" alt = "airplane"/>
        </div>
      <p>I am always open to opportunities related to full-stack development and embedded programming. Let's connect!</p>
    </div>
    <div className="SocialIcons">
        <a href="https://github.com/isabellehuangg" target="_blank" rel="noopener noreferrer">
            <FaGithub className = "icon" />
        </a>
        <a href="https://www.linkedin.com/in/isabellehuangg" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className = "icon" />
        </a>
        <a href="https://www.instagram.com/isabellehuangg/?hl=en" target="_blank" rel="noopener noreferrer">
            <FaInstagram className = "icon" />
        </a>
        <a href="mailto:isabelle.huang@uwaterloo.ca" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className = "icon" />
        </a>
    </div>
  </div>
)

export default Connect;