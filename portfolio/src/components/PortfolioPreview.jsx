import React from 'react'
import PortfolioCard from "./Card/PortfolioCard.jsx"
import {data} from "../data.js"
import Carousel from "react-material-ui-carousel"
import {AppBar, Tabs, Tab} from "@material-ui/core"
import {Home} from "@material-ui/icons"
export default function PortfolioPreview() {
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