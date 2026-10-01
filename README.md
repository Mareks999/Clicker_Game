# Truck Clicker

A lightweight browser clicker game where you build a trucking empire, earn money, upgrade your vehicles, and expand your fleet. The project combines JavaScript for game logic, PHP for save/load functionality, and CSS for the visual interface.

## Overview

In this game, you start with a basic truck and click to earn income. As you progress, you unlock stronger vehicles, better upgrades, and higher-value routes. The goal is to grow your trucking business from a small cargo operation into a large logistics network.

## Features

- Click-to-earn gameplay
- Vehicle fleet progression
- Upgrade system for income and efficiency
- Stage progression and milestones
- Save/load player data using PHP backend
- Sound effects and settings menu
- Autosave support
- Responsive single-page game interface

## Tech Stack

- JavaScript
- CSS
- PHP
- HTML

## Project Structure

```text
Clicker_Game/
├── assets/              # Game assets such as images
├── css/                 # Stylesheets for the game UI
├── data/                # Save data directory
│   └── saves/           # Player save files
├── js/                  # Game logic and frontend scripts
│   ├── calc.js          # Calculation and progression logic
│   ├── config.js        # Game balance and upgrade data
│   ├── main.js          # Main UI/game loop
│   ├── save.js          # Client-side save handling
│   ├── shop.js          # Shop and upgrade interactions
│   ├── sound.js         # Sound/audio logic
│   ├── state.js         # State tracking
│   └── truck.js         # Truck behavior and click handling
├── php/                 # Backend save/load scripts
│   ├── config.php       # Save directory and validation config
│   ├── load.php         # Load saved game state
│   └── save.php         # Save game state
├── index.php            # Main entry page
├── truck_clicker.zip    # Archived project build
└── README.md            # Project documentation
```

## Requirements

- PHP 7.4 or newer
- A modern web browser
- Local web server or PHP built-in server

## Running the Game

1. Clone or download the repository.
2. Open a terminal in the project folder.
3. Start a local PHP server:

```bash
php -S localhost:8000
```

4. Open the following URL in your browser:

```text
http://localhost:8000/
```

## Gameplay

- Click the truck to earn money.
- Buy more vehicles from the fleet panel.
- Purchase upgrades to increase income and efficiency.
- Progress through game stages to unlock higher-tier trucks.
- Save progress to continue later.

## Save System

The project stores player progress in the `data/saves/` directory using a PHP backend. This allows the game to persist user data between play sessions.

## Notes

- The game is designed to run from a local PHP server, which is important for save/load functionality.
- The UI and text are in Latvian, but the game structure is simple enough to modify for other languages.
- The project is lightweight and easy to extend with new trucks, upgrades, or features.

## License

This project does not currently include an explicit license file. If you plan to distribute or reuse it, check with the repository owner before publishing or commercializing the code.

## Future Ideas

- Add more truck types and route unlocks
- Introduce achievements and missions
- Add a currency shop or premium upgrades
- Improve graphics and animation
- Add multiplayer or leaderboard functionality

## Author

Created by Mareks999.
