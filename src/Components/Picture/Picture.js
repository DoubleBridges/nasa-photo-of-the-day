import React, { useState } from "react"
import axios from "axios"

import './Picture.scss'

const Picture = () => {

    const [image, setImage] = useState("Loading ...");
    const [title, setTitle] = useState("Photo");
    const [explanation, setExplanation] = useState("Photo Information");
    const [copyright, setCopyright] = useState("NASA");
    const [hdImage, setHdImage] = useState("Loading ...");

    // const hdImage = () => {setImage(hiRes)}

    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(res => {
            console.log(res)
            setHdImage(res.data.hdurl)
            setTitle(res.data.title)
            setImage(res.data.url)

        })
        .catch(err => console.log(err))


    return (
        <div className="astro-photo">
            <img className src={image} alt={title}></img>
            <button onClick={setImage(hdImage)}>Click for HD Image</button>
        </div>
    )
}

export default Picture