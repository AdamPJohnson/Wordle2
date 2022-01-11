import React from "react";

function Tile({ char, className }) {
  return <div className={`tile ${className}`}>{char.toUpperCase()}</div>;
}

export default Tile;
