import React from 'react'
import PortfolioCard from "../Card/PortfolioCard.jsx"
import {data} from "../../data.js"
import Carousel from 'react-material-ui-carousel'
import "../styles/Portfolio.css"
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
