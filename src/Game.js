import React, { useState, useEffect } from "react";
import Board from "./Board";

import Button from "react-bootstrap/Button";
import GuessListItem from "./GuessListItem";
import list from "./listOfWords";

const fiveLetters = list.filter((word) => word.length === 5);

function Game({ guessedLetters, setGuessedLetters }) {
  const [target, setTarget] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [guesses, setGuesses] = useState([]);
  const [guessText, setGuessText] = useState("");
  const [won, setWon] = useState(false);

  function evaluateGuess(guess, target) {
    let targetArray = target.split("");
    let result = {};
    const newLetters = {
      perfect: [...guessedLetters.perfect],
      semi: [...guessedLetters.semi],
      guessed: [...guessedLetters.guessed],
    };
    for (let i = 0; i < targetArray.length; i++) {
      if (targetArray[i] === guess[i]) {
        result[i] = "perfect";
        newLetters.perfect.push(guess[i]);
        targetArray[i] = "*";
      } else if (
        !newLetters.perfect.includes(guess[i]) &&
        !newLetters.semi.includes(guess[i])
      ) {
        newLetters.guessed.push(guess[i]);

        result[i] = "wrong";
      }
    }
    for (let i = 0; i < targetArray.length; i++) {
      if (
        targetArray.includes(guess[i]) &&
        targetArray[i] !== guess[i] &&
        targetArray[i] !== "*"
      ) {
        result[i] = "semi";
        newLetters.semi.push(targetArray[i]);
      }
    }
    setGuessedLetters(newLetters);

    return result;
  }

  useEffect(() => {
    let randomIndex = Math.round(Math.random() * fiveLetters.length);
    setTarget(fiveLetters[randomIndex].toUpperCase());
  }, [setTarget]);

  useEffect(() => {
    if (won) setErrorMessage("You Won!");
    else if (gameOver)
      setErrorMessage('Game Over! Press "Reset" to start again!');
  }, [gameOver, won]);
  useEffect(() => {
    if (guesses.length === 6) setGameOver(true);
  }, [guesses]);
  const handleChange = (e) => {
    setGuessText(e.target.value);
  };
  const guessList = guesses.map((guess) => {
    const winner = guess.guessWord === target;
    return <GuessListItem guess={guess} winner={winner} />;
  });

  const handleSubmit = () => {
    // if (!list.includes(guessText.toLowerCase()))
    //   return setErrorMessage("Must be a real word!");  ////once list is better
    if (guessText.length !== 5)
      return setErrorMessage("Guesses must be 5 letters");
    if (gameOver) return setErrorMessage('Press "Reset" to start again!');
    if (guessText.toUpperCase() === target) {
      setWon(true);
      setGameOver(true);
    }

    const evaluation = evaluateGuess(guessText.toUpperCase(), target);
    const newGuess = { guessWord: guessText.toUpperCase(), evaluation };
    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);
    setErrorMessage("");
    setGuessText("");
  };

  const handleReset = () => {
    setGuesses([]);
    let randomIndex = Math.round(Math.random() * fiveLetters.length);
    setTarget(fiveLetters[randomIndex].toUpperCase());

    setErrorMessage("");
    setGameOver(false);
    setWon(false);
    setGuessText("");
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleReveal = () => {
    setErrorMessage(`Your word was ${target.toUpperCase()}`);
  };

  return (
    <div id="main">
      <div id="board">
        <div id="guesses">{guessList}</div>
        <div id="controls">
          <label id="inputLabel" htmlFor="input">
            Guess:
          </label>{" "}
          <br />
          <input
            type="text"
            id="input"
            name="input"
            onChange={handleChange}
            value={guessText}
            onKeyDown={handleOnKeyDown}
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
