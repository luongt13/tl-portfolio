import React from 'react'
import {Container} from "@material-ui/core"
import PortfolioPreview from "../PortfolioPreview"
import "./About.css"

export default function About() {
    return (
        <div>
            <Container className="contain">
            <h3>the start of my journey</h3>
            <p>software engineer</p>
            <p>While working as a Dietitian, I was intrigued by the software and tools I used. I wished there were certain tools out there to better help my patients.</p>
            <p>At the end of 2019, I decided along with a couple others to build a website with simple and easy to understand health information. My hope was to better equip health care professionals to education patients.</p>
            </Container>
            <Container className="contain">
            <h3>my creations</h3>
            </Container>
            <PortfolioPreview/>
        </div>
    )
}
