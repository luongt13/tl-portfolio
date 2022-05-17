import React, { useState, useEffect } from 'react'
import PortfolioPreview from "../PortfolioPreview/PortfolioPreview.jsx"
import About from "../About/About.jsx"
import Contact from "../Contact/Contact.jsx"
import Intro from "../Intro/Intro.jsx"
import { projects, workProjects } from "../../data.js"
 
import "./Landing.css"
export default function Landing() {
   const [projectData, setProjectData] = useState([])
   const [workProjectData, setWorkProjectData] = useState([])
 
   useEffect(() => {
       fetchProjects()
       fetchWorkProjects()
   }, [])
 
   const fetchProjects = () => {
       setProjectData(projects)
   }
 
   const fetchWorkProjects = () => {
       setWorkProjectData(workProjects)
   }
 
   return (
       <div className="content">
           <div className="main" id="landing">
               <Intro/>
           </div>
           <div className="main" id="about">
               <About/>
           </div>
           <div className="main" id="projects">
               <h2 className="color-label">Things I've created for work.</h2>
               <PortfolioPreview projects={workProjectData}/>
               <h2 className="color-label">Things I've created for fun.</h2>
               <PortfolioPreview projects={projectData}/>
           </div>
           <div className="main" id="contact">
               <Contact/>
           </div>
       </div>
   )
}
