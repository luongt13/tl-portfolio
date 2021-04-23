import {Link} from 'react-router-dom'
import {AppBar, Toolbar, Button} from "@material-ui/core"
import Footer from "./Footer"
import "./styles/Nav.css"

export default function Nav() {
    return (
        <div>
            <AppBar position="static" className="nav" color="default">
                <Toolbar>
            <Button><Link to="/">Tran Luong</Link></Button>
            <Button><Link to="/">Projects</Link></Button>
            <Button><Link to="/about">My Story</Link></Button>
            <Footer/>
            </Toolbar>
            </AppBar>
        </div>
    )
}
