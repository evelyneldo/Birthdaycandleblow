# Birthday Candle Blow (React + Vite)

A tiny React app for birthdays:

1. Enter a name

2) 3–2–1 countdown (text only)
3) Auto “Blow"
4) Confetti + wishes screen.

## Features

- Clean state flow: Start → Countdown → Wishes
- Candle with flame (flame disappears after countdown)
- Auto-blow
- Colorful confetti (pure CSS/JS)
- Icons via `react-icons` (cake, party popper, celebration)
- Simple styles in one CSS

## Structure

Features
Enter your name
Automatic countdown: 3 → 2 → 1 → BLOW!
Candle flame disappears automatically
Beautiful birthday message with colorful emojis & react-icons
Uses React hooks (useState, useEffect)
Clean UI + smooth CSS animations
Deploy-ready (Netlify / Vercel)

App Flow

User enters their name

Countdown appears

Text shows: “Get ready to blow in…”

Candle flame is visible

At 0 → “BLOW!” appears

Flame disappears

Wish screen appears:
Happy Birthday, {name}!

Technologies Used

React
Vite
JavaScript
CSS
React Icons

Folder Structure
Birthdaycandleblow/
│── public/
│── src/
│ ├── components/
│ │ ├── Candle.jsx
│ │ ├── Countdown.jsx
│ │ ├── Wishes.jsx
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css
│── package.json
│── vite.config.js
│── README.md

Installation & Usage
1Clone the repository
git clone https://github.com/evelyneldo/Birthdaycandleblow.git

Install dependencies
npm install

Run locally
npm run dev
