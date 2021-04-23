import React from 'react'
import {Button, Card, CardActions, CardContent, Container} from "@material-ui/core/"
import "./styles/Portfolio.css"
export default function PortfolioCard(props) {
    //add tools I used to for one
    return (
        <>
        {/* <Card className="project-item">
            <CardContent className="card">
                <h4>{props.data.title}</h4>
                <img src={props.data.img} alt="fish"/>
            </CardContent>
            <CardActions className="buttons">
            <Button>live site</Button>
            <Button>github</Button>
            </CardActions>
        </Card> */}
        <Container elevation={0} className="project-item">
            <CardContent className="card"> 
            <div className="card">
                <img src={props.data.img} alt="fish"/>
                </div> 
            </CardContent> 
            <CardActions className="buttons"> 
            <Card>
            <div className="buttons">
            {/* <h4>{props.data.title}</h4> */}
                <Button href={props.data.webURL} target="_blank">live site</Button>
                <Button href={props.data.githubURL} target="_blank">github</Button>
            </div>
            </Card> 
            </CardActions>
        </Container>
        </>
    )
}
