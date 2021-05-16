import React from 'react'
import {Button, Container, Tooltip} from "@material-ui/core/"
import {GitHub, DesktopWindows} from "@material-ui/icons"

import "./PortfolioCard.css"

export default function PortfolioCard(props) {
    //add tools I used to for one
    return (
        <Container className="project-item">
            <div className="card">
                <div className="details">
                    <h3>{props.data.title}</h3>
                    <h4>{props.data.description}</h4>
                    <h5>Technologies: {props.data.tools}</h5>
                </div>
                <img src={props.data.img} alt={props.data.title}/>
            </div>
            <div className="buttons">
            <Tooltip title="live site">
                <Button href={props.data.webURL} target="_blank"><DesktopWindows/></Button>
            </Tooltip>
            <Tooltip title="github">
                <Button href={props.data.githubURL} target="_blank"><GitHub/></Button>
            </Tooltip>
            </div>
        </Container> 
    )
}
