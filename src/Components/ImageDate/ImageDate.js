import React from 'react'

import styled from 'styled-components'

const DatePicker = styled.span`
    display: flex;
    flex-direction: column;
    width:200px;
    padding-left: 200px;
`;

const ImageDate = (props) => {

    return (
        <DatePicker>
            <input id="date-input"></input>
            <button id="set-date" onClick={props.pickDate}>Enter Date YYYY-MM-DD</button>
        </DatePicker>
    )
}

export default ImageDate