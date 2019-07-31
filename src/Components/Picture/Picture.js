import React from "react"

import './Picture.scss'

const Picture = (props) => {

    return (
        <div className="astro-photo">
            <img src={props.image} alt={props.title} title={props.title}></img>
            <button onClick={props.clicked}>Click for HD Image</button>
        </div>
    )
}

export default Picture