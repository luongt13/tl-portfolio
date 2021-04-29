import {Email, GitHub, LinkedIn} from "@material-ui/icons"
import {Button} from "@material-ui/core"
import "./Contact.css"

export default function Contact() {

    return (
        <div>
            <h2>Get in touch.</h2>
            <p>I am currently looking for opportunities. You can reach me through email or connect with me on LinkedIn.</p>
            <div className="buttons">
                <Button href={`mailto:luongt.13@gmail.com`}><Email fontSize="small"/></Button>
                <Button><LinkedIn/></Button>
            </div>
        </div>
    )
}