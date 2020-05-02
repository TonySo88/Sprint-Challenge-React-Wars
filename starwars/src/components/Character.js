// Write your Character component here

import React, {useEffect, useState } from 'react';
import Axios from 'axios';
import CharacterCard from './CharacterCard'

const Character = props => {
    const [starwarsData, setStarwarsData] = useState([]);
  
    useEffect(() => {
      Axios.get('https://swapi.py4e.com/api/people')
      .then(response => {
        console.log("Star Wars Response", response)
        setStarwarsData(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
    }, [])

    return (
        <div className="movieInfo">
           
            {starwarsData.map((movie) => {
                return (
                    <CharacterCard 
                    id={movie.id}
                    name={movie.name}
                    homeworld={movie.homeworld}
                    films={movie.films}
                    />
                );
            })}
        
        </div>
    );
}

export default Character