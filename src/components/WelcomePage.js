import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <StyledIMG
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Link to={'/characters'}><StyledH2>Click Here to View Characters.</StyledH2></Link>
      </header>
    </section>
  );
}

const StyledIMG = styled.img`
border: 1px solid black;
margin-left: 360px;
`

const StyledH2 = styled.h2`
text-align:center;
`
