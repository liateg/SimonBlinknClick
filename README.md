# SimonBlinknClick
This is my second game project, built to learn and practice front-end JavaScript! It's a classic Simon Game where players test their memory by replicating sequences of flashing buttons. This project allowed me to dive deeper into DOM manipulation, event handling, and game logic development.


## Overview
This is a JavaScript-based implementation of the classic Simon memory game. Players must replicate a sequence of button presses that gets longer and more challenging as they progress through levels.

## Features
- Randomly generated sequences of button presses.
- Interactive gameplay with visual and auditory feedback.
- Game over screen when a mistake is made.
- Incremental levels with progressively longer sequences.

## How to Play
1. Press any key to start the game.
2. A button will flash to indicate the start of the sequence. Memorize its position and color.
3. Click the buttons in the exact sequence shown.
4. If you replicate the sequence correctly, you will advance to the next level, and a new button will be added to the sequence.
5. If you make a mistake, the game will display "Game Over" and you can restart by pressing a key.

## Controls
- **Keyboard**: Start the game by pressing any key.
- **Mouse**: Click on the buttons to play.

## How It Works
1. A random button is selected using `Math.random()` and highlighted visually.
2. The sequence of button IDs is stored in `outId[]`.
3. Each button click is tracked using the `inId[]` array.
4. The clicked sequence is compared against the generated sequence (`outId[]`).
5. If the sequences match, the game progresses to the next level. If they don't, the game ends.

## Setup Instructions
1. Save the provided HTML, CSS, and JavaScript files in the same directory.
2. Open the HTML file in a web browser to start the game.
3. Ensure that jQuery is included in your project for proper functioning of the game.

## File Details
- **HTML**: Defines the structure of the game interface.
- **CSS**: Adds styling and animations to the buttons and game display.
- **JavaScript**: Implements game logic, randomization, and event handling.

## Credits
- Developed by Lia Teg
- Initial implementation completed on 10/17/2024
