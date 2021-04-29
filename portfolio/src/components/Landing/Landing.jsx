import React from 'react'
import PortfolioPreview from "../PortfolioPreview.jsx"
import {Button} from "@material-ui/core"
import {Email, LinkedIn} from "@material-ui/icons"
import About from "../About/About.jsx"
import Contact from "../Contact/Contact.jsx"
import Intro from "../Intro/Intro.jsx"

import "./Landing.css"
export default function Landing() {
    return (
        <div className="content">
            <div className="main">
                <Intro/>
            </div>
            <div className="main" id="about">
                <About/>
            </div>
            {/* <div className="main">
                <h1 className="big-text">Tran Luong.</h1>
                <p>I am a Philly-based software engineer who loves taking a creative approach to developing tools to improve the lives of others.</p>
            </div>
            <div className="main">
                <h2>My journey.</h2>
                <p>My interest in web development started qhile working as a Dietitian. I was intrigued by the software and tools I used. I wished there were certain tools out there to better help my patients.</p>
                <p>At the end of 2019, I decided along with a couple others to build a website with simple and easy to understand health information. My hope was to better equip health care professionals to education patients.</p>
                <p>Fast forward to today, I am finishing up a coding bootcamp through General Assembly and been able to build 4 projects.</p>
                <p>Technologies I have worked with: </p>
                <div className="tech">
                    <ul className="left">
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Netlify</li>
                        <li>Node.js</li>
                        
                    </ul>
                    <ul className="right">
                        <li>Heroku</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                    </ul>
                </div>
            </div> */}
            <div className="main" id="projects">
                <h2>Things I've created.</h2>
                <PortfolioPreview/>
            </div>
            <div className="main">
                <Contact/>
            </div>
            {/* <div className="main">
            <h2>Get in touch.</h2>
            <p>I am currently looking for opportunities. You can reach me through email or connect with me on LinkedIn.</p>
            <div className="buttons">
                <Button href={`mailto:luongt.13@gmail.com`}><Email fontSize="small"/></Button>
                <Button><LinkedIn/></Button>
            </div>
            </div> */}
        </div>
    )
}