import React from 'react';
import './Projects.css';
import { FaGithub } from "react-icons/fa";
import Fishing from '../../assets/fishing_rod.jpg';

const Projects = () => (
  <div className= "Projects" id = 'projects'>
    <span className = "title-container">
        <h1 className = 'Title'>Projects</h1>
        <img src = {Fishing} className = 'fishing' alt = "fishing person"/>
    </span>
    <p>Here you'll find projects that I've done in the past, ranging from website to mobile development! Source code or Devpost submissions are accessible through the Github icon beside each project name.</p>
    <div className='Project_List'>
        <div className = "project">
            <span className = "project_header">
                <p className = "project_name">trimLink</p>
                <a href="https://devpost.com/software/navigation-19" target="_blank" rel="noopener noreferrer">
                    <FaGithub className = "p_icon" />
                </a>
            </span>
            <p className = "description">A simple URL shortener that allows the client to input a long link to receive a trimmed link to share with others. The trimmed link will redirect to the original link when clicked.</p>
            <p className = "Tech">Tech Stack:</p>
            <div className = 'Stack'>
                <li>PHP</li>
                <li>MySQL</li>
                <li>HTML/CSS</li>
                <li>Javascript</li>
                <li>AJAX</li>
            </div>
        </div>
        <div className = "project">
            <span className = "project_header">
                <p className = "project_name">uClone</p>
                <a href="https://github.com/isabellehuangg/uClone" target="_blank" rel="noopener noreferrer">
                    <FaGithub className = "p_icon" />
                </a>
            </span>
            <p className = "description">A discord bot that detects and stores messages containing haikus, and generates messages based on user history.</p>
            <p className = "Tech">Tech Stack:</p>
            <div className = 'Stack'>
                <li>Python</li>
                <li>Discord API</li>
                <li>MongoDB</li>
            </div>
        </div>
        <div className = "project">
            <span className = "project_header">
                <p className = "project_name">NAVIGATE-19</p>
                <a href="https://devpost.com/software/navigation-19" target="_blank" rel="noopener noreferrer">
                    <FaGithub className = "p_icon" />
                </a>
            </span>
            <p className = "description">A contact tracing application that allow for ease and prociffiency when checking for potential COVID risks in a classroom setting through location tracking. Built during Hack the North 2021.</p>
            <p className = "Tech">Tech Stack:</p>
            <div className = 'Stack'>
                <li>Dart</li>
                <li>Figma</li>
                <li>Flutter</li>
                <li>Google Maps API</li>
            </div>
        </div>
    </div>
  </div>
)

export default Projects;