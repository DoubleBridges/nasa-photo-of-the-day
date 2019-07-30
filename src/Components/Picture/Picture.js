import React from "react"

import './Picture.scss'

const Picture = (props) => {

    return (
        <div className="astro-photo">
            <iframe src={props.image} alt={props.title} title={props.title}></iframe>
            <button onClick={props.clicked}>Click for HD Image</button>
        </div>
    )
}

export default Picture