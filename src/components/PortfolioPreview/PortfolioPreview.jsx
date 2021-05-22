import {useState, useEffect} from 'react'
import PortfolioCard from "../Card/PortfolioCard.jsx"
import {data} from "../../data.js"
import "./Portfolio.css"

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
            {/* <h2 className="color-label">Things I've created.</h2> */}
            {content.map((item) => {
                return (
                    <PortfolioCard key={item.number} data={item}/>
                )
            })} 
        </div>
    )
}