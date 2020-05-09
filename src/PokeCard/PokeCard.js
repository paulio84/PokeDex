import React from 'react';
import './PokeCard.css';

import { padLeft } from '../Helpers';

function PokeCard({ pokemon }) {
  const paddedId = padLeft(pokemon.id, 3);
  return (
    <div className="PokeCard">
      <img className="PokeCard__img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`} alt={pokemon.name} />
      <div className="PokeCard__details">
        <h1 className="PokeCard__name">{pokemon.name}</h1>
        <h3 className="PokeCard__type">{pokemon.type}</h3>
        <p className="PokeCard__xp">XP: {pokemon.base_experience}</p>
      </div>
    </div>
  );
}

export default PokeCard;
