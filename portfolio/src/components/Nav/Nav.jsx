import {useEffect, useState} from "react"
import {Link} from 'react-router-dom'
import {AppBar, Toolbar, Button,SwipeableDrawer} from "@material-ui/core"
import Switch from "@material-ui/core/Switch"
import {Menu, Code, Email, Home, Face} from "@material-ui/icons"
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
            <AppBar position="static" className="nav" color="default">
                <Toolbar>
                    <div className="mobile">
                        <Button onClick={toggleDrawer("left", true)}><Menu/></Button>
                        <SwipeableDrawer anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)} onOpen={toggleDrawer("left", true)}>
                            <Button className="drawer-btn"><Link style={{color: color}}to="/"><Home/></Link></Button>
                            <Button><Link style={{color: color}} to="/about"><Face/></Link></Button>
                            <Button className="drawer-btn"><Link style={{color: color}}to="/projects"><Code/></Link></Button>
                            <Button><Link style={{color: color}} to="/contact"><Email/></Link></Button> 
                        </SwipeableDrawer>
                    </div>
                    <div className="desktop">
                        <Button><Link to="/" style={{color: color}}><img className="logo" src="/images/logo.png"title="Home" alt="logo"/></Link></Button>
                        <Button><Link style={{color: color}} to="/about"><Face/></Link></Button>
                        <Button><Link style={{color: color}}to="/projects"><Code/></Link></Button>
                        <Button><Link style={{color: color}} to="/contact"><Email/></Link></Button>
                    </div>
                    <Switch className="switch" color="default" checked={props.mode.checked} onChange={props.handleChange} name="checked"></Switch>
                </Toolbar>
            </AppBar>
        {/* <ClickAwayListener onClickAway={() => setToggle(prevState => !prevState)}>
        <Drawer variant="persistent" anchor="left" open={toggle} className="mobile">
            <IconButton>
                <Close onClick={() => setToggle(prevState => !prevState)} edge="start" aria-label="menu"/>
            </IconButton>
            <div className="list-menu">
                <Button><Link style={{color: color}}to="/projects">Projects</Link></Button>
                <Button><Link style={{color: color}} to="/about">My Story</Link></Button>
                <Contact/>
            </div>
        </Drawer>
        </ClickAwayListener>  */}

    </div>

    )
}
