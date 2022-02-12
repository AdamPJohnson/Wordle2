import React from "react";
import Button from "react-bootstrap/Button";
import { Switch } from "@mui/material";

const Controls = React.forwardRef(
  (
    {
      errorMessage,
      handleSubmit,
      handleReset,
      handleReveal,
      easyMode,
      handleToggle,
    },
    ref
  ) => {
    return (
      <div id="controls">
        <div id="errorMessage">{errorMessage}</div>
        <Button
          data-testid="submitButton"
          variant="outline-dark"
          id="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <br />
        <Button
          size="sm"
          variant="outline-dark"
          id="reset"
          onClick={handleReset}
        >
          Reset
        </Button>
        <Button
          data-testid="revealButton"
          size="sm"
          variant="outline-dark"
          id="reveal"
          onClick={handleReveal}
          ref={ref}
        >
          Reveal
        </Button>
        <br />
        <Switch checked={easyMode} onChange={handleToggle} />
        <span>easy mode</span>
      </div>
    );
  }
);

export default Controls;
