import React from 'react';
import PokeDex from '../PokeDex/PokeDex';
import './PokeGame.css';

import { drawCards, calculateDeckScore } from '../Helpers';

function PokeGame({ pokemons }) {
  const { deck1, deck2 } = drawCards(pokemons, pokemons.length / 2);
  const deck1Score = calculateDeckScore(deck1);
  const deck2Score = calculateDeckScore(deck2);

  return (
    <div className="PokeGame">
      <PokeDex cards={deck1} isWinner={deck1Score > deck2Score} exp={deck1Score} />
      <PokeDex cards={deck2} isWinner={deck2Score > deck1Score} exp={deck2Score} />
    </div>
  );
}
PokeGame.defaultProps = {
  pokemons: [
    { id: 4, name: 'Charmander', type: 'Fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'Water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'Bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'Flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'Electric', base_experience: 112 },
    { id: 37, name: 'Jigglypuff', type: 'Normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'Poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'Normal', base_experience: 65 }
  ]
};

export default PokeGame;
