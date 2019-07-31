import React from "react"

import './Photo.scss'

const Photo = (props) => {

    return (
        <div className="photo">
            <header>{props.title}-{props.date}</header>
            <img src={props.image} alt={props.title}></img>
            {/* <button onClick={props.photoClick}>Click for HD Image</button> */}
        </div>
    )
}

export default Photo