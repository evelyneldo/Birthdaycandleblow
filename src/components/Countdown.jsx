import React, { useEffect, useState } from "react";
export default function Countdown({ onBlow }) {
  const [count, setCount] = useState(3);
  const [message, setMessage] = useState("Get ready to blow in…");

  useEffect(() => {
    if (count === 0) {
      setMessage("BLOW!");
      const t = setTimeout(() => onBlow && onBlow(), 800);
      return () => clearTimeout(t);
    }

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, onBlow]);

  return (
    <div className="countdown">
      <div className="bubble">{message}</div>
      <div className="big">{count > 0 ? count : "🎉"}</div>
    </div>
  );
}
