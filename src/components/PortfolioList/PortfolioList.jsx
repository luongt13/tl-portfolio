import React from 'react'
import PortfolioCard from "../Card/PortfolioCard.jsx"
// import {Button, Card, CardActions} from "@material-ui/core/"
import {data} from "../../data.js"
import Carousel from 'react-material-ui-carousel'

export default function PortfolioList() {
    return (
        <Carousel className="project-list">
            {data.map((item) => {
                return (
                    <PortfolioCard key={item.number} data={item}/>
                )
            })}
        </Carousel>
    )
}
