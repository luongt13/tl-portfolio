import React from 'react'
import PortfolioPreview from "../PortfolioPreview.jsx"
import About from "../About/About.jsx"
import Contact from "../Contact/Contact.jsx"
import Intro from "../Intro/Intro.jsx"

import "./Landing.css"
export default function Landing() {
    return (
        <div className="content">
            <div className="main" id="landing">
                <Intro/>
            </div>
            <div className="main" id="about">
                <About/>
            </div>
            <div className="main" id="projects">
                <h2 className="color-label">Things I've created.</h2>
                <PortfolioPreview/>
            </div>
            <div className="main" id="contact">
                <Contact/>
            </div>
        </div>
    )
}