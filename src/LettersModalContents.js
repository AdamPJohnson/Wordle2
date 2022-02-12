import React from "react";
import Tile from "./Tile";

function LettersModalContents({ guessedLetters }) {
  const lettersList = allLetters.map((letter) => {
    let className;
    if (guessedLetters.perfect.includes(letter)) className = "perfect";
    else if (guessedLetters.semi.includes(letter)) className = "semi";
    else if (guessedLetters.guessed.includes(letter)) className = "guessed";
    return <Tile className={className} size={"large"} char={letter}></Tile>;
  });

  return <div id="lettersList">{lettersList}</div>;
}

export default LettersModalContents;

const allLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
