import React, { useEffect } from "react";
import { FaBirthdayCake, FaGift } from "react-icons/fa";
import { GiPartyPopper, GiCandleLight } from "react-icons/gi";
import { MdCelebration } from "react-icons/md";

export default function Wishes({ name }) {
  useEffect(() => {
    for (let i = 0; i < 60; i++) createConfetti();
  }, []);

  function createConfetti() {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = (Math.random() * 2 + 3).toFixed(2) + "s";
    confetti.style.animationDelay = (Math.random() * 0.8).toFixed(2) + "s";
    confetti.style.setProperty("--rand", Math.random().toString());
    confetti.style.backgroundColor = `hsl(${Math.floor(
      Math.random() * 360
    )}, 90%, 60%)`;

    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5500);
  }

  return (
    <div className="wish-screen">
      <h1>
        <GiPartyPopper size={28} style={{ verticalAlign: "-4px" }} /> Happy
        Birthday, <strong>{name}</strong>!{" "}
        <FaBirthdayCake size={28} style={{ verticalAlign: "-4px" }} />
      </h1>

      <p>
        Wishing you joy, love, and blessings{" "}
        <MdCelebration size={22} style={{ verticalAlign: "-4px" }} />
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          marginTop: 12,
        }}
      >
        <FaGift size={36} />
        <GiCandleLight size={36} />
        <GiPartyPopper size={36} />
      </div>
    </div>
  );
}
