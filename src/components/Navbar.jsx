import React from "react"
import {Link} from 'react-scroll'
import '../styles/Navbar.css'


export default function Navbar(){
    return(
        <div className="Navbar">
            <span>M Vasanth Kumar</span>
            <ul >
                <li className="nav-item"><Link to="AboutMe" spy={true} smooth={true} offset={-70} duration={500}>AboutMe</Link></li>
                <li className="nav-item"><Link to="projects" spy={true} smooth={true} offset={-90} duration={500}>Projects</Link></li>
                <li className="nav-item"><Link to="skills" spy={true} smooth={true} offset={-90} duration={500}>Skills</Link></li>
                <li className="nav-item"><Link to="certificates" spy={true} smooth={true} offset={-90} duration={500}>Certificates</Link></li>
            </ul>

        </div>
    )
}