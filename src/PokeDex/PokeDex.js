import React from 'react';
import './PokeDex.css';

import PokeCard from '../PokeCard/PokeCard';

function PokeDex({ cards, isWinner, exp }) {
  return (
    <div className="PokeDex">
      {isWinner
        ? <h1 className='PokeDex__winner'>Winning Hand</h1>
        : <h1 className='PokeDex__loser'>Losing Hand</h1>}
      <p>Total XP: {exp}</p>
      <div className="PokeDex__cards">
        {cards.map(card => <PokeCard key={card.id} pokemon={card} />)}
      </div>
    </div>
  );
}

export default PokeDex;
