import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import SearchForm from './SearchForm';
import styled from 'styled-components'

const CharacterList = props =>  {
  const [characters, setCharacters] = useState([])
    useEffect(() => {
      const getCharacter = () => {
        axios 
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.log("Error.....", error)
        })
      }
    getCharacter();
  }, []);

  return (
    <section className="character-list">
      <SearchForm characters={characters}/>
      {characters.map(character => (
        <CharacterDetails key={character.id} character={character} />
      ))}
    </section>
  );
}

function CharacterDetails({ character }) {
  const { name, species } = character; 
  return (
    <StyledContainer>
      <StyledDiv>
        <h2>{name}</h2>
        <h3>{species}</h3>
      </StyledDiv>
    </StyledContainer>
  );
}

export default CharacterList;

const StyledDiv = styled.div`
text-align: center;
border: 2px dashed black;
margin-top: 8px;
margin-bottom: 8px;
`

const StyledContainer = styled.div`
background-color: limegreen;
`

// TODO: Add API Request here - must run in `useEffect`
//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
