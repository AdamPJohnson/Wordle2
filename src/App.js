import "./App.css";
import Game from "./Game";
import Button from "react-bootstrap/Button";
import Modal from "react-modal";
import { useState } from "react";
import RulesModalContents from "./RulesModalContents";
import LettersModalContents from "./LettersModalContents";
const modalStyles = {
  content: {
    border: "none",
    boxShadow: "1px 1px 10px rgba(0,0,0,0.5)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};
function App() {
  const [rulesModalIsOpen, setRulesModalIsOpen] = useState(false);
  const [lettersModalIsOpen, setLettersModalIsOpen] = useState(false);
  const [guessedLetters, setGuessedLetters] = useState({
    perfect: [],
    semi: [],
    guessed: [],
  });
  return (
    <div className="App">
      <header className="App-header">
        <h2 id="title">WORDLE 2</h2>
        <p id="authors">by Sean and Adam</p>
        <Button
          onClick={() => setLettersModalIsOpen(true)}
          variant="outline-light"
          size="sm"
          id="lettersButton"
        >
          Letters
        </Button>
        <Button
          onClick={() => setRulesModalIsOpen(true)}
          variant="outline-light"
          size="sm"
          id="rulesButton"
        >
          Rules
        </Button>
      </header>
      <Game
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
      />
      <Modal
        isOpen={rulesModalIsOpen}
        onRequestClose={() => setRulesModalIsOpen(false)}
        style={modalStyles}
        contentLabel="Rules Modal"
      >
        <RulesModalContents setRulesModalIsOpen={setRulesModalIsOpen} />
      </Modal>
      <Modal
        isOpen={lettersModalIsOpen}
        onRequestClose={() => setLettersModalIsOpen(false)}
        style={modalStyles}
        contentLabel="Letters Modal"
      >
        <LettersModalContents
          guessedLetters={guessedLetters}
          setLettersModalIsOpen={setLettersModalIsOpen}
        />
      </Modal>
    </div>
  );
}

export default App;
