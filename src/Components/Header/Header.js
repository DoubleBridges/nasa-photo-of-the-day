import React from "react"
import styled from 'styled-components'

const Header = styled.header`
    display: grid;
    grid-template-columns:1fr 3fr 1fr;
    grid-template-rows: 1fr;
    background-color: #0C0C18;
    justify-content: center;
    align-items: center;
    color: white;

    img {
        grid-area: 1/1/2/2;
        padding-left: 100px;
        
    }

    h1 {
        grid-area: 1/2/2/3;
        font-family: 'Bungee Outline', cursive;
        font-size: 4rem;
        

        
    }

    nav {
        grid-area: 1/3/2/4;
        font-family: "Catamaran";
        font-size: 2rem;
        
    }

`;

const logo = 'https://api.nasa.gov/images/logo.png';
const PageHeader = () => {

    return (
        <Header className="logo-header">
            <img src={logo} alt="logo"></img>
            <h1>Astronomy Picture of the Day</h1>
            <nav></nav>
        </Header>

    )

}

export default PageHeader