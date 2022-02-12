import React, { useEffect, useState } from "react";

const InputTile = React.forwardRef(
  (
    {
      className,
      size = "",
      index,
      refIndex,
      setRefIndex,
      guessText,
      setGuessText,
      handleOnKeyDown: keyDownProp,
      resetToggle,
    },
    ref
  ) => {
    const [char, setChar] = useState("");

    useEffect(() => {
      setChar("");
    }, [resetToggle]);

    useEffect(() => {
      if (refIndex === index && ref.current) {
        ref.current.focus();
      }
    }, [refIndex, index, ref]);

    const onKeyDown = (e) => {
      ///backspace
      if (e.keyCode === 8) {
        if (refIndex > 0) setRefIndex(index - 1);
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
        setRefIndex(index + 1);
        if (!char)
          setGuessText(
            guessText.slice(0, index) + e.key + guessText.slice(index + 1)
          );
        else
          setGuessText(
            guessText.slice(0, index) + e.key + guessText.slice(index + 1)
          );
      }
      keyDownProp(e);
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
        onChange={() => {}}
      />
    );
  }
);

export default InputTile;
