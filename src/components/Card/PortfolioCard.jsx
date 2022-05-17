import React from 'react'
import {Button, Tooltip, Card, CardContent, CardActions, CardMedia} from "@material-ui/core/"
import {GitHub, DesktopWindows} from "@material-ui/icons"
import "./PortfolioCard.css"
 
export default function PortfolioCard(props) {
   return (
       <Card className="project-item">
           <div className="card">
               <CardContent className="details">
                   <CardMedia className="detail-container">
                   <h3>{props.data.title}</h3>
                   <p>{props.data.description}</p>
                   <h5>Technologies: {props.data.tools}</h5>
                   </CardMedia>
               </CardContent>
               <div className="image">
                   <img src={props.data.img} alt={props.data.title}/>
               </div>
           </div>
           <CardActions className="buttons">
           { props.data.webURL ? <Tooltip title="live site">
               <Button href={props.data.webURL} target="_blank"><DesktopWindows/></Button>
           </Tooltip> : null }
           { props.data.githubURL ?<Tooltip title="github">
               <Button href={props.data.githubURL} target="_blank"><GitHub/></Button>
           </Tooltip> : null }
           </CardActions>
       </Card>
   )
}
