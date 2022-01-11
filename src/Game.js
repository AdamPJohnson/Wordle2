import React, { useState, useEffect } from "react";
import Board from "./Board";

import Button from "react-bootstrap/Button";
import GuessListItem from "./GuessListItem";
import list from "./listOfWords";
const fiveLetters = list.filter((word) => word.length === 5);
function evaluateGuess(guess, target) {
  let targetArray = target.split("");
  let result = {};
  for (let i = 0; i < targetArray.length; i++) {
    console.log({ targetArray, guess });
    if (targetArray[i] === guess[i]) {
      result[i] = "perfect";
      targetArray[i] = "*";
    } else result[i] = "wrong";
  }
  for (let i = 0; i < targetArray.length; i++) {
    if (
      targetArray.includes(guess[i]) &&
      targetArray[i] !== guess[i] &&
      targetArray[i] !== "*"
    ) {
      console.log(guess[i]);
      result[i] = "semi";
    }
  }

  return result;
}
function Game() {
  const [target, setTarget] = useState();

  const [errorMessage, setErrorMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [guesses, setGuesses] = useState([]);
  const [guessText, setGuessText] = useState("");

  useEffect(() => {
    let randomIndex = Math.round(Math.random() * fiveLetters.length);
    setTarget(fiveLetters[randomIndex]);
  }, [setTarget]);
  useEffect(() => {
    if (gameOver) setErrorMessage('Game Over! Press "Reset" to start again!');
  }, [gameOver]);
  useEffect(() => {
    if (guesses.length === 6) setGameOver(true);
  }, [guesses]);
  const handleChange = (e) => {
    setGuessText(e.target.value);
  };
  const guessList = guesses.map((guess) => {
    return <GuessListItem guess={guess} />;
  });

  const handleSubmit = () => {
    if (guessText.length !== 5)
      return setErrorMessage("Guesses must be 5 letters");
    if (gameOver) return setErrorMessage('Press "Reset" to start again!');
    const evaluation = evaluateGuess(guessText, target);
    const newGuess = { guessWord: guessText, evaluation };
    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);
    setErrorMessage("");
  };

  const handleReset = () => {
    setGuesses([]);
    let randomIndex = Math.round(Math.random() * fiveLetters.length);
    setTarget(fiveLetters[randomIndex].toLowerCase());

    setErrorMessage("");
    setGameOver(false);
  };

  const handleReveal = () => {
    setErrorMessage(`Your word was "${target}"`);
  };
  return (
    <div id="main">
      <div id="board">
        <div id="guesses">{guessList}</div>
        <div id="controls">
          <label htmlFor="input">Guess:</label> <br />
          <input
            type="text"
            id="input"
            name="input"
            onChange={handleChange}
            value={guessText}
          />
          <br />
          <div id="errorMessage">{errorMessage}</div>
          <Button variant="outline-dark" id="submit" onClick={handleSubmit}>
            Submit
          </Button>
          <br />
          <Button
            size="sm"
            variant="outline-dark"
            id="reset"
            onClick={handleReset}
          >
            Reset
          </Button>
          <Button
            size="sm"
            variant="outline-dark"
            id="reveal"
            onClick={handleReveal}
          >
            Reveal
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Game;
