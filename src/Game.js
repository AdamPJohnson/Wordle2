import React, { useState, useEffect, useRef, useCallback } from "react";
import GuessListItem from "./GuessListItem";
import list from "./listOfWordsHard";
import easyList from "./listOfWordsEasy";
import InputTiles from "./InputTiles";
import Controls from "./Controls";
const fiveLetters = list.filter((word) => word.length === 5);

const fiveLettersEasy = easyList.filter((word) => word.length === 5);

function Game({ guessedLetters, setGuessedLetters }) {
  const [target, setTarget] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [guesses, setGuesses] = useState([]);
  const [guessText, setGuessText] = useState("     ");
  const [won, setWon] = useState(false);
  const [easyMode, setEasyMode] = useState(false);
  const [refIndex, setRefIndex] = useState(0);
  const [resetToggle, setResetToggle] = useState(false);
  const revealRef = useRef();

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
        newLetters.semi.push(guess[i]);
      }
    }
    setGuessedLetters(newLetters);
    return result;
  }

  const handleSubmit = () => {
    if (guessText.length !== 5 || guessText.includes(" ")) {
      return setErrorMessage("Guesses must be 5 letters");
    }
    if (!list.includes(guessText.toUpperCase()))
      return setErrorMessage("Must be a real word!");

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
    setGuessText("     ");
    setResetToggle(!resetToggle);
    setRefIndex(0);
  };

  const handleReset = useCallback(() => {
    setGuesses([]);
    if (easyMode) {
      let randomIndex = Math.round(Math.random() * fiveLettersEasy.length);
      setTarget(fiveLettersEasy[randomIndex].toUpperCase());
    } else {
      let randomIndex = Math.round(Math.random() * fiveLetters.length);
      setTarget(fiveLetters[randomIndex].toUpperCase());
    }
    setErrorMessage("");
    setGameOver(false);
    setWon(false);
    setGuessText("     ");
    setGuessedLetters({
      perfect: [],
      semi: [],
      guessed: [],
    });
  }, [easyMode, setGuessedLetters]);

  const handleToggle = () => {
    setEasyMode(!easyMode);
  };

  const handleReveal = () => {
    setErrorMessage(`Your word was ${target.toUpperCase()}`);
    // revealRef.current.focus();
  };

  useEffect(() => {
    let randomIndex = Math.round(Math.random() * fiveLetters.length);
    setTarget(fiveLetters[randomIndex].toUpperCase());
  }, [setTarget]);

  useEffect(() => {
    handleReset();
  }, [easyMode, handleReset]);

  useEffect(() => {
    if (won) setErrorMessage("You Won!");
    else if (gameOver)
      setErrorMessage('Game Over! Press "Reset" to start again!');
  }, [gameOver, won]);

  useEffect(() => {
    if (guesses.length === 6) setGameOver(true);
  }, [guesses]);

  const guessList = guesses.map((guess, i) => {
    const winner = guess.guessWord === target;
    return (
      <GuessListItem guess={guess} winner={winner} key={guess.guessWord + i} />
    );
  });

  return (
    <div id="main">
      <div id="board">
        <div id="guesses">
          {guessList}

          {!gameOver && (
            <InputTiles
              setGuessText={setGuessText}
              guessText={guessText}
              refIndex={refIndex}
              setRefIndex={setRefIndex}
              handleSubmit={handleSubmit}
              resetToggle={resetToggle}
            />
          )}
        </div>
        <Controls
          errorMessage={errorMessage}
          handleSubmit={handleSubmit}
          handleReset={handleReset}
          handleReveal={handleReveal}
          easyMode={easyMode}
          handleToggle={handleToggle}
          ref={revealRef}
        />
      </div>
    </div>
  );
}

export default Game;
