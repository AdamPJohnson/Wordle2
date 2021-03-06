import React from "react";
import Button from "react-bootstrap/Button";
function RulesModalContents({ setRulesModalIsOpen }) {
  return (
    <div id="modalContents">
      <Button
        onClick={() => setRulesModalIsOpen(false)}
        variant="outline-dark"
        size="sm"
        id="closeModalButton"
      >
        X
      </Button>
      <h2>How To Play</h2>
      <p>Try to guess the secret word! </p>
      <p>Words are always 5 letters long.</p>
      <p>
        Letters that are in the correct position will be marked as{" "}
        <span style={{ color: "green" }}>green</span>.
      </p>
      <p>
        Letters that are in the secret word but in the wrong position will be
        marked as <span style={{ color: "orange" }}>orange</span>.
      </p>
      <p>
        Letters that are not in the secret word appear in <strong>black</strong>
      </p>
      <p>Press "Reveal" to find out the word.</p>
      <p>Press "Reset" to start again!</p>
    </div>
  );
}

export default RulesModalContents;
