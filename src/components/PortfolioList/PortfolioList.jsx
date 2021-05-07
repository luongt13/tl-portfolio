import React from 'react'
import PortfolioCard from "../Card/PortfolioCard.jsx"
// import {Button, Card, CardActions} from "@material-ui/core/"
import {data} from "../../data.js"

export default function PortfolioList() {
    return (
        <div className="project-list">
            {data.map((item) => {
                return (
                    <PortfolioCard key={item.number} data={item}/>
                )
            })}
        </div>
    )
}
