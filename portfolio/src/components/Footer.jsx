import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import {Button} from "@material-ui/core"

export default function Footer() {
    return (
        <div className="contact">
            <Button href="https://www.linkedin.com/in/tran-luong/" target="_blank"><LinkedInIcon fontSize="medium"/></Button>
            <Button href="https://github.com/luongt13"><GitHubIcon fontSize="small"/></Button>
        </div>
    )
}