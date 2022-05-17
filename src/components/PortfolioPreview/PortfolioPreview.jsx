import React from "react"
import PortfolioCard from "../Card/PortfolioCard.jsx"
import "./Portfolio.css"
 
export default function PortfolioPreview(props) {
   const { projects } = props
 
 
   return (
   <div className="project-list">
           {projects && projects.map((item) => {
               return (
                   <PortfolioCard key={item.number} data={item}/>
               )
           })}
       </div>
   )
}
