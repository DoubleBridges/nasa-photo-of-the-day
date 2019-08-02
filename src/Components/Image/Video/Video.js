import React from "react"

import './Video.scss'

const Video = (props) => {

    return (
        <div className="video">
            <header>{props.title}</header>
            <iframe src={props.image} alt={props.title} title={props.title}></iframe>
            <button onClick={props.videoClick}>Click to open in new window</button>
        </div>
    )
}

export default Video