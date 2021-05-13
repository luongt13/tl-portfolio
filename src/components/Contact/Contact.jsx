import {Email, LinkedIn} from "@material-ui/icons"
import {Button} from "@material-ui/core"
import "./Contact.css"
import {useRef} from "react"

export default function Contact() {
    let reference = useRef()
    console.log(reference)
    return (
        <>
            <h2 className="color-label">Get in touch.</h2>
            <div ref={reference}></div>
            <p>I am currently looking for opportunities. You can reach me through email or connect with me on LinkedIn.</p>
            <div className="buttons">
                <Button href={`mailto:luongt.13@gmail.com`}><Email fontSize="small"/></Button>
                <Button><LinkedIn/></Button>
            </div>
        </>
    )
}