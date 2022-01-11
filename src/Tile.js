import React from "react";

function Tile({ char, className, size = "" }) {
  return (
    <div className={`tile ${className} ${size}`}>{char.toUpperCase()}</div>
  );
}

export default Tile;
