# 🪐 Kids' Memory Card Game (React)

A fun, child-friendly memory card game built with React. Designed as a hands-on learning project to master component architecture, state management, props, and data flow.

---

## 🎮 Game Features & Rules

- **Themes:** Powered by DiceBear avatars (`planets` and `clay`).
- **Difficulty Levels:**
    - **Easy:** 6 cards
    - **Hard:** 8 cards
- **No Harsh Game Overs:** Clicking a duplicate card triggers an "Oops!" reset on your current score, but your **Best Score** and collected stickers are safely preserved.
- **Sticker Gallery:** Complete rounds to unlock and view your badge collection.

---

## Architecture Blueprint

### 1. Central State (Managed in `App.jsx`)

- `theme` (`'planets'` | `'clay'`)
- `difficulty` (6 cards [Easy] | 8 cards [Hard])
- `currentScore` & `bestScore`
- `clickedCards` (Array tracking clicked cards per round)
- `gameStatus` (`'setup'` | `'playing'` | `'gameover'`)

### 2. Component Tree & Hierarchy

```text
App
├── SetupScreen (Theme Selector, Difficulty Selector)
├── PlayingScreen
│    ├── ScoreSection (Current Score, Best Score)
│    └── CardsSection (Maps and renders individual Card components)
└── GameOverScreen
     ├── AnnouncementSection (Result message + Sticker Collection Gallery)
     └── ButtonsSection (Play Again, Change Settings)
```
