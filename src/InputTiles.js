import React, { useLayoutEffect, useRef, useState } from "react";
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

  // const refArray = [ref0, ref1, ref2, ref3, ref4];

  // useLayoutEffect(() => {
  //   console.log(refArray[refIndex].current);
  //   refArray[refIndex].current.focus();
  // }, [refIndex]);
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
        testID={"input0"}
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
        testID={"input1"}
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
        testID={"input2"}
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
        testID={"input3"}
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
        testID={"input4"}
      />
    </div>
  );
}

export default InputTiles;
