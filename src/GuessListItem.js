import React from "react";
import Tile from "./Tile";
function GuessListItem({ guess, winner }) {
  const characters = guess.guessWord.split("");
  const tiles = characters.map((char, i) => {
    return <Tile className={`${guess.evaluation[i]}`} char={char} key={i} />;
  });
  const winnerClass = winner ? "winner" : "";
  return <div className={`${winnerClass} guessListItem`}>{tiles}</div>;
}

export default GuessListItem;
