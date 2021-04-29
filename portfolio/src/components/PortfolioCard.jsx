import React from 'react'
import {Button, Container, Tooltip} from "@material-ui/core/"
import {GitHub, DesktopWindows} from "@material-ui/icons"

// import "./styles/Portfolio.css"
import "./PortfolioCard.css"

export default function PortfolioCard(props) {
    //add tools I used to for one
    return (
        <>
        <Container className="project-item">
            <div className="card">
                <h4>{props.data.title}</h4>
                <img src={props.data.img} alt="fish"/>
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
