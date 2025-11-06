import React from "react";

export default function Candle({ isLit }) {
  return (
    <div className="candle-container">
      <div className="candle">{isLit && <div className="flame"></div>}</div>
    </div>
  );
}
