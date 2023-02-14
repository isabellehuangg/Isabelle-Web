import './Navbar.css'
import React from 'react'
import isabelle from '../../assets/isabelle.png'

function Navbar() {
    const NavScroll = (word) => {
        var element = document.getElementById(word);
        element.scrollIntoView({behavior: "smooth"});
    }

    return (
        <div className='header'>
            <a href="/" class = "logo"> 
                <img src={isabelle} alt='isabelle' className = 'isabelle'/>
            </a>
            <div className='headerLinks'>
                <p onClick = {() => NavScroll("about")}>About</p>
                <p onClick = {() => NavScroll("projects")}>Projects</p>
                <p onClick = {() => NavScroll("experience")}>Experience</p>
                <p onClick = {() => NavScroll("contact")}>Contact</p>
            </div>
        </div>
    )
}

export default Navbar
