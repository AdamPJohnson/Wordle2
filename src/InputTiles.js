import React from "react";
import InputTile from "./InputTile";

function InputTiles({
  refIndex,
  setRefIndex,
  guessText,
  setGuessText,
  handleOnKeyDown,
  resetToggle,
}) {
  return (
    <div className="guessListItem">
      <InputTile
        refIndex={refIndex}
        setRefIndex={setRefIndex}
        index={0}
        guessText={guessText}
        setGuessText={setGuessText}
        handleOnKeyDown={handleOnKeyDown}
        resetToggle={resetToggle}
        testID={"input0"}
      />
      <InputTile
        refIndex={refIndex}
        setRefIndex={setRefIndex}
        index={1}
        guessText={guessText}
        setGuessText={setGuessText}
        handleOnKeyDown={handleOnKeyDown}
        resetToggle={resetToggle}
        testID={"input1"}
      />
      <InputTile
        refIndex={refIndex}
        setRefIndex={setRefIndex}
        index={2}
        guessText={guessText}
        setGuessText={setGuessText}
        handleOnKeyDown={handleOnKeyDown}
        resetToggle={resetToggle}
        testID={"input2"}
      />
      <InputTile
        refIndex={refIndex}
        setRefIndex={setRefIndex}
        index={3}
        guessText={guessText}
        setGuessText={setGuessText}
        handleOnKeyDown={handleOnKeyDown}
        resetToggle={resetToggle}
        testID={"input3"}
      />
      <InputTile
        refIndex={refIndex}
        setRefIndex={setRefIndex}
        index={4}
        guessText={guessText}
        setGuessText={setGuessText}
        handleOnKeyDown={handleOnKeyDown}
        resetToggle={resetToggle}
        testID={"input4"}
      />
    </div>
  );
}

export default InputTiles;
