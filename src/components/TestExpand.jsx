import React from 'react'
import {Button} from "@material-ui/core"
import {ExpandMore} from "@material-ui/icons"
import "./TestExpand.css"

export default function TestExpand() {
    return (
        <div className="expand-more">
            <Button><ExpandMore fontSize="large"/></Button> 
        </div>
    )
}
