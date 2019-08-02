import React from "react"
import styled from 'styled-components'

const Text = styled.p`
    color: white;
    font-family: "Catamaran", sans-serif;
    font-size: 1.5rem;
    text-align: center;
`;

const TextBox = (props) => {
    return (
        <Text>{props.explanation}</Text>
    )
}

export default TextBox