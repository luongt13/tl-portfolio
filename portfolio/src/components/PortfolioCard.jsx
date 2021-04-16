import React from 'react'
import {Button, Card, CardActions, CardContent} from "@material-ui/core/"
import "./styles/Portfolio.css"
export default function PortfolioCard(props) {
console.log(props)
    return (
        <>
        <Card className="project-item">
            <CardContent className="card">
                <h4>{props.data.title}</h4>
                <img src={props.data.img} alt="fish"/>
            </CardContent>
            <CardActions className="buttons">
            <Button>live site</Button>
            <Button>github</Button>
            </CardActions>
        </Card>
        </>
    )
}
