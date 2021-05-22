import React from 'react'
import {GitHub, LinkedIn} from "@material-ui/icons"
import {Button} from "@material-ui/core"
import "./Footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <div className="buttons">
                <Button href="https://www.linkedin.com/in/tran-luong/" target="blank"><LinkedIn/></Button>
                <Button href="https://github.com/luongt13" target="blank"><GitHub fontSize="small"/></Button>
            </div>
            <p>Designed and built by Tran Luong</p>
        </div>
    )
}
