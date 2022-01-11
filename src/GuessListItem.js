import React from "react";

function GuessListItem({ guess }) {
  return (
    <div className="guessListItem">
      <p className="guessListItemText">
        <span className={`${guess.evaluation[0]}`}>{guess.guessWord[0]} </span>
        <span className={`${guess.evaluation[1]}`}>{guess.guessWord[1]} </span>
        <span className={`${guess.evaluation[2]}`}>{guess.guessWord[2]} </span>
        <span className={`${guess.evaluation[3]}`}>{guess.guessWord[3]} </span>
        <span className={`${guess.evaluation[4]}`}>{guess.guessWord[4]} </span>
      </p>
    </div>
  );
}

export default GuessListItem;
