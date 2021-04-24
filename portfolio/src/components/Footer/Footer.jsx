import React from 'react'
import {GitHub, LinkedIn} from "@material-ui/icons"
import {Button} from "@material-ui/core"
import "./Footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <Button><LinkedIn/></Button>
            <Button><GitHub fontSize="small"/></Button>
            <p>Designed and build by Tran Luong</p>
        </div>
    )
}
