import React from 'react'
import {Container} from "@material-ui/core"
import PortfolioPreview from "../PortfolioPreview"
import "./About.css"

export default function About() {
    return (
        <div>
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
          
            {/* <Container className="contain">
            <h3>my creations</h3>
            </Container>
            <PortfolioPreview/> */}
        </div>
    )
}
