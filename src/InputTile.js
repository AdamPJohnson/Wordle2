import React, { useEffect, useLayoutEffect, useState, useRef } from "react";

const InputTile = ({
  className,
  size = "",
  index,
  refIndex,
  setRefIndex,
  guessText,
  setGuessText,
  handleSubmit,
  resetToggle,
  testID,
}) => {
  const [char, setChar] = useState("");
  const ref = useRef();
  useEffect(() => {
    setChar("");
  }, [resetToggle]);

  useLayoutEffect(() => {
    if (refIndex === index && ref.current) {
      ref.current.focus();
    }
  }, [index, refIndex]);

  const onKeyDown = (e) => {
    ///backspace
    if (e.keyCode === 8) {
      if (refIndex > 0) setRefIndex(refIndex - 1);
      if (char) {
        setChar(" ");
        setGuessText(
          guessText.slice(0, index) + " " + guessText.slice(index + 1)
        );
      }
    }
    ///valid alphabetical characters
    if (e.keyCode >= 65 && e.keyCode <= 90 && index <= 4) {
      setChar(e.key.toUpperCase());
      if (refIndex < 4) setRefIndex(refIndex + 1);
      if (!char)
        setGuessText(
          guessText.slice(0, index) + e.key + guessText.slice(index + 1)
        );
      else
        setGuessText(
          guessText.slice(0, index) + e.key + guessText.slice(index + 1)
        );
    }
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <input
      onClick={() => setRefIndex(index)}
      onKeyDown={onKeyDown}
      ref={ref}
      type="text"
      className={`tile inputTile ${size}`}
      value={char}
      style={{ fontWeight: "bold" }}
      onChange={onKeyDown}
      data-testid={testID}
    />
  );
};
export default InputTile;
