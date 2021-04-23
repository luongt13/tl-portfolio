import {Link} from 'react-router-dom'
import {AppBar, Toolbar, Button} from "@material-ui/core"
import Footer from "./Footer"
import "./styles/Nav.css"

export default function Nav() {
    return (
        <div>
            <AppBar position="static" className="nav" color="default">
            <img className="logo" src="/images/logo.png"/>
                <Toolbar className="links">
                {/* <img className="logo" src="/images/logo.png"/> */}
                {/* <Button><Link to="/">Tran Luong</Link></Button> */}
                <Button><Link to="/">Projects</Link></Button>
                <Button><Link to="/about">My Story</Link></Button>
                <Footer/>
                </Toolbar>
            </AppBar>
        </div>
    )
}
