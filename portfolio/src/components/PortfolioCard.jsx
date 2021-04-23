import React from 'react'
import {Button, Card, CardActions, CardContent, Container, ButtonGroup,} from "@material-ui/core/"
import GitHubIcon from '@material-ui/icons/GitHub'
import WebIcon from '@material-ui/icons/Web'

import "./styles/Portfolio.css"
export default function PortfolioCard(props) {
    //add tools I used to for one
    return (
        <>
        <Container className="project-item">
            <CardContent className="card">
                <h4>{props.data.title}</h4>
                <img src={props.data.img} alt="fish"/>
            </CardContent>
            <CardActions className="buttons">
            <Button href={props.data.webURL} target="_blank"  endIcon={<WebIcon/>}>live site</Button>
            <Button href={props.data.githubURL} target="_blank" endIcon={<GitHubIcon/>}>github</Button>
            </CardActions>
        </Container>
        {/* <Container elevation={0} className="project-item">
            <CardContent className="card"> 
            <div className="card">
                <h1>{props.data.title}</h1>
                <img src={props.data.img} alt="fish"/>
                </div> 
            </CardContent> 
            <CardActions className="buttons"> 
            {/* <Card> */}
            {/* <div className="buttons">
                <ButtonGroup variant="contained" size="small">
                <Button href={props.data.webURL} target="_blank" endIcon={<WebIcon/>}>Live Site</Button>
                <Button href={props.data.githubURL} target="_blank" endIcon={<GitHubIcon/>}>github</Button>
                </ButtonGroup>
            </div> */}
            {/* </Card>  */}
            {/* </CardActions>
        </Container> */}
        </>
    )
}
