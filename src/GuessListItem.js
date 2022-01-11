import React from "react";
import Tile from "./Tile";
function GuessListItem({ guess }) {
  const characters = guess.guessWord.split("");
  const tiles = characters.map((char, i) => {
    return <Tile className={`${guess.evaluation[i]}`} char={char} />;
  });
  return <div className="guessListItem">{tiles}</div>;
}

export default GuessListItem;
