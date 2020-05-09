export function padLeft(value, padLength) {
  let valueString = value.toString();
  for (let i = valueString.length; i < padLength; i++) {
    valueString = "0" + valueString;
  }

  return valueString;
}

export function drawCards(deck, handSize) {
  let drawnDeck = [];
  for (let i = 0; i < handSize; i++) {
    const rand = Math.floor(Math.random() * deck.length);
    drawnDeck.push(deck[rand]);
    deck.splice(rand, 1);
  }

  return {
    deck1: drawnDeck,
    deck2: deck
  }
}

export function calculateDeckScore(deck) {
  const reducer = (accum, currentValue) => {
    return accum + currentValue.base_experience;
  };

  return deck.reduce(reducer, 0);
}