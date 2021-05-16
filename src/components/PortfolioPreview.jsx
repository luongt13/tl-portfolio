import {useState, useEffect} from 'react'
import PortfolioCard from "./Card/PortfolioCard.jsx"
import {data} from "../data.js"
// import Carousel from "react-material-ui-carousel"
import "./styles/Portfolio.css"

export default function PortfolioPreview() {
    let [content, setContent] = useState([])
    useEffect(() => {
        fetch()
    }, [])

    function fetch() {
        setContent(data)
    }

    return (
    <div className="project-list">
            {/* <Carousel className="project-list"> */}
            {content.map((item) => {
                return (
                    <PortfolioCard key={item.number} data={item}/>
                )
            })} 
        </div>
    )
}