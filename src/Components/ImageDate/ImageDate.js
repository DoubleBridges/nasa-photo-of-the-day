import React from 'react'

const ImageDate = (props) => {

    return (
        <>
            <input id="date-input"></input>
            <button id="set-date" onClick={props.pickDate}>Enter Date YYYY-MM-DD</button>
        </>
    )
}

export default ImageDate