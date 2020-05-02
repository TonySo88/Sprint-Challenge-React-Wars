import React from 'react'
import Styled from "styled-components"

const Name = Styled.h1`
    color: green
`

const CharacterCard = props => {
    return <div className="character-card" key={props.key}>
        <Name>{props.name}</Name>
        <p>{props.mass}</p>
        <p>{props.height}</p>
    </div>
}

export default CharacterCard