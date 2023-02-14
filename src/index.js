import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Connect from './components/Connect/Connect';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />  
    <Projects /> 
    <Experience /> 
    <Connect />
  </React.StrictMode>
);
