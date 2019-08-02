import React from "react"
import styled from 'styled-components'

const Card = styled.section`
    display: grid;
    grid-template-columns: 600px;
    grid-template-rows: 100px 1fr;
    font-family: "Catamaran", sans-serif;
    font-size: 2rem;
    justify-content: center;
    color: white;

`;

const Image = styled.img`
    width: 600px;
    height: 600px;
    margin: 0 auto;
    filter: none;
    
`;

const Title = styled.header`
    padding-left: 20px;
    text-align: center;

`;

const Photo = (props) => {

    return (
        <Card>
            <Title>
                <div>
                    {props.title}
                </div>
                <div>
                    {props.date}
                </div>
            </Title>
            <Image src={props.image} alt={props.title}></Image>
        </Card>
    )
}

export default Photo