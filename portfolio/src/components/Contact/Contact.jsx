import {useState, useRef, useEffect} from 'react'
// import {Link} from "react-router-dom"
import {Email, GitHub, LinkedIn} from "@material-ui/icons"
import {Button, Popper, Grow, ClickAwayListener, Paper} from "@material-ui/core"
import "./Contact.css"

export default function Contact() {
    // const [open, setOpen] = useState(false)
    // const anchorRef = useRef(null)

    // const handleToggle = () => {
    //     setOpen(prevState => !prevState)
    // }

    // const handleClose = (event) => {
    //     if (anchorRef.current && anchorRef.current.contains(event.target)) {
    //         return
    //     }
    //     setOpen(false)
    // }

    // function handleListKeyDown(event) {
    //     if (event.key === 'Tab') {
    //         event.preventDefault();
    //         setOpen(false);
    //     }
    //     }
    //     const prevOpen = useRef(open);
    //     useEffect(() => {
    //     if (prevOpen.current === true && open === false) {
    //         anchorRef.current.focus();
    //     }
    //         prevOpen.current = open;
    //     }, [open]);
    return (
        <div className="contact">
            
            {/* <Button ref={anchorRef} aria-controls={open ? 'menu-list-grow' : undefined} aria-haspopup="true" onClick={handleToggle}><Email/></Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
                <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                    <div autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                        <div className="contact-btn">
                            <Button onClick={handleClose} href="https://www.linkedin.com/in/tran-luong/" target="_blank" startIcon={<LinkedIn/>}>LinkedIn
                            </Button>
                            <Button onClick={handleClose} href="https://github.com/luongt13" target="_blank" startIcon={<GitHub/>}>GitHub</Button>
                        </div>
                    </div>
                    </ClickAwayListener>
                </Paper>
            </Grow>
            )}
        </Popper> */}
        </div>
    )
}