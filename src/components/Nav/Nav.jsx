import {useEffect, useState} from "react"
import {Link} from 'react-router-dom'
import {AppBar, Toolbar, Button,SwipeableDrawer} from "@material-ui/core"
import Switch from "@material-ui/core/Switch"
import {Menu, Code, Email, Face, Description} from "@material-ui/icons"
import "./Nav.css"

export default function Nav(props) {
    const [color, setColor] = useState("")
    const [state, setState] = useState({
        left: false,
    })
    useEffect(() => {
        if(props.mode.checked === true) {
            setColor("white")
        } else {
            setColor("black")
        }
    }, [props.mode])

    const toggleDrawer = (anchor, open) => () => {
        setState({...state, [anchor]: open})
    }

    return (
    <div>
        <AppBar position="static" className="nav" color="default" id="top">
            <Toolbar>
                <div className="mobile">
                    <Button onClick={toggleDrawer("left", true)}><Menu/></Button>
                    <SwipeableDrawer anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)} onOpen={toggleDrawer("left", true)}>
                        <Button className="drawer-btn"><Link style={{color: color}}to="/"><img className="logo" src="/images/logo.png"title="Home" alt="logo"/></Link></Button>
                        <Button><Link style={{color: color}} to="#about"><Face fontSize="small"/> About</Link></Button>
                        <Button className="drawer-btn"><Link style={{color: color}}to="#projects"><Code/> Projects</Link></Button>
                        <Button><Link style={{color: color}} to="#contact"><Email fontSize="small"/> Contact</Link></Button> 
                    </SwipeableDrawer>
                </div>
                <div className="desktop">
                    <Button><Link to="/" style={{color: color}}><img className="logo" src="/images/logo.png"title="Home" alt="logo"/></Link></Button>
                    <Button href="#about"><Face fontSize="small"/> About</Button>
                    <Button href="#projects"><Code/> Projects</Button>
                    <Button href="#contact"><Email fontSize="small"/> Contact</Button>
                    <Button href="https://drive.google.com/file/d/1tVWyEaGqpravnyFE3ZakGI0iGFNWhyF0/view?usp=sharing" target="blank"><Description fontSize="small"/> Resume</Button>
                </div>
                <Switch className="switch" color="default" checked={props.mode.checked} onChange={props.handleChange} name="checked"></Switch>
            </Toolbar>
        </AppBar>
    </div>

    )
}
