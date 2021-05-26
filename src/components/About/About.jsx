import React from 'react'
import "./About.css"

export default function About() {
    return (
        <div>
            <h2 className="color-label">My journey.</h2>
            <p>My interest in web development started in 2017 while working as a Dietitian. I was intrigued by the software and tools I used. I had ideas of tools I wanted to create to better help my patients.</p>
            <p>At the end of 2019, I decided along with a couple others to build a website with simple and easy to understand health information. Health information can be complicated and confusing. My hope was to make information more digestible.</p>
            <p>Fast forward to today, I am equipped to independently develop applications using creative problem-solving and I have become fluent in multiple programming languages.</p>
            <p>Technologies I have worked with: </p>
            <div className="tech">
                <ul className="left">
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Netlify</li>
                    <li>Heroku</li>
                    <li>Node.js</li>
                </ul>
                <ul className="right">
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>Ruby</li>
                    <li>Ruby on Rails</li>
                </ul>
            </div>
        </div>
    )
}
