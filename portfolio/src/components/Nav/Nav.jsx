import {useEffect, useState} from "react"
import {Link} from 'react-router-dom'
import {AppBar, Toolbar, Button, Menu, MenuItem} from "@material-ui/core"
import Switch from "@material-ui/core/Switch"
import Contact from "../Contact/Contact.jsx"
import "./Nav.css"

export default function Nav(props) {
    const [color, setColor] = useState("")
    useEffect(() => {
        if(props.mode.checked === true) {
            setColor("white")
        } else {
            setColor("black")
        }
    }, [props.mode])
    
    return (
            <AppBar position="static" className="nav" color="default">
                <Toolbar>
                    <div className="items">

                <Button><Link to="/"><img className="logo" src="/images/logo.png"title="Home" alt="logo"/></Link></Button>
                <Button><Link style={{color: color}}to="/projects">Projects</Link></Button>
                <Button><Link style={{color: color}} to="/about">My Story</Link></Button>
                <Contact/>
                </div>

                <Switch className="switch" color="default" checked={props.mode.checked} onChange={props.handleChange} name="checked"></Switch>
                </Toolbar>
            </AppBar>
    )
}
