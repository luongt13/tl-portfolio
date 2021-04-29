import React from 'react'
import {Email, GitHub, LinkedIn, Code, Home, Face} from "@material-ui/icons"
import {Button, Tooltip} from "@material-ui/core"
import "./SideNav.css"

export default function SideNav() {
    return (
        <div className="side-nav">
            <Tooltip title="About" placement="right">
                <Button href="#about"><Face/></Button>
            </Tooltip>
            <Tooltip title="Projects" placement="right">
                <Button href="#projects"><Code/></Button>
            </Tooltip>
            <Tooltip title="Contact" placement="right">
                <Button href="#contact"><Email fontSize="small"/></Button> 
            </Tooltip>   
            <Tooltip title="LinkedIn" placement="right">
                <Button><LinkedIn/></Button>
            </Tooltip>   
            <Tooltip title="Github" placement="right">
                <Button><GitHub fontSize="small"/></Button>   
            </Tooltip>   

        </div>
    )
}
