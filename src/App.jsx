import React, { useState } from "react";
import Countdown from "./components/Countdown";
import Candle from "./components/Candle";
import Wishes from "./components/Wishes";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleStart = () => {
    if (name.trim().length === 0) return;
    setStarted(true);
  };

  const handleCountdownEnd = () => {
    setFinished(true);
  };

  return (
    <div className="app-container">
      {!started && !finished && (
        <div className="start-screen">
          <h2>🎂 Enter your name</h2>
          <input
            type="text"
            className="name-input"
            placeholder="Your Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="start-btn" onClick={handleStart}>
            Start Celebration
          </button>
        </div>
      )}

      {started && !finished && (
        <div className="countdown-section">
          <Candle isLit={true} />

          <Countdown onBlow={handleCountdownEnd} />
        </div>
      )}

      {finished && <Wishes name={name} />}
    </div>
  );
}
