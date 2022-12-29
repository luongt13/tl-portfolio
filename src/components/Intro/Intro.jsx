import React from 'react'
import "./Intro.css"
export default function Intro() {
    return (
        <div className="intro">
        <img src="/images/profile-pic.jpg" alt="profile" id="profile"/>
            <div className="intro-text">
                <h1 className="big-text color-label">Tran Luong.</h1>
                <p>I am a software engineer who loves taking a creative approach to developing tools to improve the lives of others.</p>
            </div>
            
        </div>
    )
}
