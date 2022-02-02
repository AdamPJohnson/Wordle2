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

    if (refIndex === index && ref.current) {
      ref.current.focus();
    }

    const onKeyDown = (e) => {
      ///backspace
      if (e.keyCode === 8) {
        if (refIndex > 0) setRefIndex(index - 1);
        if (char) {
          setChar("");
          setGuessText(guessText.slice(0, -1));
        }
      }
      if (e.keyCode >= 65 && e.keyCode <= 90) {
        setChar(e.key.toUpperCase());
        setRefIndex(index + 1);
        if (!char) setGuessText(guessText + e.key);
        else setGuessText(guessText.slice(0, -1) + e.key);
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
      />
    );
  }
);

export default InputTile;
