import React from 'react'
import {Email, GitHub, LinkedIn, Code, Home, Face} from "@material-ui/icons"
import {Button, Tooltip} from "@material-ui/core"
import "./SideNav.css"

export default function SideNav() {
    return (
        <div className="side-nav">
            <Tooltip title="Top" placement="right">
                <Button href="#landing"><Home/></Button>
            </Tooltip>
            <Tooltip title="About" placement="right">
                <Button href="#about"><Face/></Button>
            </Tooltip>
            <Tooltip title="Projects" placement="right">
                <Button href="#projects"><Code/></Button>
            </Tooltip>
            <Tooltip title="Contact" placement="right">
                <Button href="#contact"><Email fontSize="small"/></Button> 
            </Tooltip>   
            {/* <Tooltip title="LinkedIn" placement="right">
                <Button href="https://www.linkedin.com/in/tran-luong/" target="blank"><LinkedIn/></Button>
            </Tooltip>   
            <Tooltip title="Github" placement="right">
                <Button href="https://github.com/luongt13" target="blank"><GitHub fontSize="small"/></Button>   
            </Tooltip>    */}
        </div>
    )
}
