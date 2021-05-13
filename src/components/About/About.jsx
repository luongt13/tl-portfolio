import React from 'react'
import "./About.css"

export default function About() {
    return (
        <div>
                <h2 className="color-label">My journey.</h2>
                <p>My interest in web development started in 2017 while working as a Dietitian. I was intrigued by the software and tools I used. I had ideas of tools I wanted to create to better help my patients.</p>
                <p>At the end of 2019, I decided along with a couple others to build a website with simple and easy to understand health information. Health information can be complicated and confusing. My hope was to make information more digestible.</p>
                <p>Fast forward to today, I am finishing up a coding bootcamp through General Assembly and been able to build 4 end-to-end projects.</p>
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
