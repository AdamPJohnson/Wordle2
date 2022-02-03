import React, { useRef, useState } from "react";
import InputTile from "./InputTile";

function InputTiles({
  refIndex,
  setRefIndex,
  guessText,
  setGuessText,
  handleOnKeyDown,
  resetToggle,
}) {
  const ref0 = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  console.log(guessText);
  return (
    <div className="guessListItem">
      <InputTile
        ref={ref0}
        refIndex={refIndex}
        setRefIndex={setRefIndex}
        index={0}
        guessText={guessText}
        setGuessText={setGuessText}
        handleOnKeyDown={handleOnKeyDown}
        resetToggle={resetToggle}
      />
      <InputTile
        ref={ref1}
        refIndex={refIndex}
        setRefIndex={setRefIndex}
        index={1}
        guessText={guessText}
        setGuessText={setGuessText}
        handleOnKeyDown={handleOnKeyDown}
        resetToggle={resetToggle}
      />
      <InputTile
        ref={ref2}
        refIndex={refIndex}
        setRefIndex={setRefIndex}
        index={2}
        guessText={guessText}
        setGuessText={setGuessText}
        handleOnKeyDown={handleOnKeyDown}
        resetToggle={resetToggle}
      />
      <InputTile
        ref={ref3}
        refIndex={refIndex}
        setRefIndex={setRefIndex}
        index={3}
        guessText={guessText}
        setGuessText={setGuessText}
        handleOnKeyDown={handleOnKeyDown}
        resetToggle={resetToggle}
      />
      <InputTile
        ref={ref4}
        refIndex={refIndex}
        setRefIndex={setRefIndex}
        index={4}
        guessText={guessText}
        setGuessText={setGuessText}
        handleOnKeyDown={handleOnKeyDown}
        resetToggle={resetToggle}
      />
    </div>
  );
}

export default InputTiles;
