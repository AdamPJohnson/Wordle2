import "./App.css";
import Game from "./Game";
import Button from "react-bootstrap/Button";
import Modal from "react-modal";
import { useState } from "react";
import ModalContents from "./ModalContents";
const customStyles = {
  content: {
    border: "none",
    boxShadow: "1px 1px 10px rgba(0,0,0,0.5)",
  },
};
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h2 id="title">Wordle 2</h2>
        <p id="authors">by Sean and Adam</p>
        <Button
          onClick={() => setModalIsOpen(true)}
          variant="outline-light"
          size="sm"
          id="infoButton"
        >
          Rules
        </Button>
      </header>
      <Game />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalContents setModalIsOpen={setModalIsOpen} />
      </Modal>
    </div>
  );
}

export default App;
