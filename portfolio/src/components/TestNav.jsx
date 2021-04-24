import React from 'react'
import {Email, GitHub, LinkedIn, Code, Home, Face} from "@material-ui/icons"
import {Button, Tooltip} from "@material-ui/core"
import "./TestNav.css"

export default function TestNav() {
    return (
        <div className="side-nav">
            {/* <Tooltip title="Home" placement="right">
                <Button><Home/></Button>
            </Tooltip> */}
            <Tooltip title="About" placement="right">
                <Button><Face/></Button>
            </Tooltip>
            <Tooltip title="Projects" placement="right">
                <Button><Code/></Button>
            </Tooltip>
            <Tooltip title="Email" placement="right">
                <Button><Email fontSize="small"/></Button> 
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
