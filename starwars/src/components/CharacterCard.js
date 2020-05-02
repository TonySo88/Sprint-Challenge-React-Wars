import React from 'react'
import Styled from "styled-components"

const Name = Styled.h1`
    color: green
`

const CharacterCard = props => {
    return <li className="character-card" key={props.id}>
        <Name>{props.name}</Name>
        <p>{props.homeworld}</p>
        <p>{props.films}</p>
    </li>
}

export default CharacterCard