import {Email, LinkedIn} from "@material-ui/icons"
import {Button} from "@material-ui/core"
import "./Contact.css"

export default function Contact() {
    return (
        <>
            <h2 className="color-label">Get in touch.</h2>
            <p>You can reach me through email or connect with me on LinkedIn.</p>
            <div className="buttons">
                <Button href={`mailto:luongt.13@gmail.com`}><Email fontSize="small"/></Button>
                <Button href="https://www.linkedin.com/in/tran-luong/" target="blank"><LinkedIn/></Button>
            </div>
        </>
    )
}