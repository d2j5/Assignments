The Memory Game

 

Objective:
In this assignment, you will create a browser-based Memory Game using HTML, CSS, and JavaScript. The game consists of a grid of cards with hidden symbols. Players flip over two cards at a time, trying to find matching symbols. The goal is to match all the pairs of cards in as few moves as possible.

 

Requirements:
Display a grid of cards with hidden symbols
Allow players to flip over two cards at a time
Check if the flipped cards match; if they do, keep them revealed; if they don't, flip them back
Keep track of the number of moves made by the player
Display a "Game Over" message when all pairs of cards have been matched
Provide a "Restart" button to start a new game
 

Instructions:
Set up your project structure with the following files:

index.html
style.css
script.js
In index.html, create the basic structure of your Memory Game, including a grid of cards (minimum 6x5) using div or button elements, a placeholder to display the number of moves made, and a "Restart" button.

In style.css, apply styling to your game board, including colors, borders, and dimensions. Ensure the game is visually appealing and the card symbols are easily distinguishable when revealed.

Collect a set of symbols (e.g., emojis, icons, or images) for your cards. You'll need an even number of symbols, each appearing exactly twice.

In script.js, write the JavaScript code to handle the game logic:

Initialize an array to store the card symbols, then shuffle the array
Attach event listeners to each card in the grid
Implement a function to handle card clicks: flip the card, check for matches, update the number of moves, and check for game completion.
Implement a function to check for matching cards: compare the symbols of the two flipped cards and either keep them revealed or flip them back depending on whether they match.
Implement a function to shuffle the array of card symbols, ensuring a random arrangement of cards in each game.
Implement a function to check for game completion: display a "Game Over" message when all pairs of cards have been matched.
Implement a function to restart the game.
Implement a timer that starts when the player flips the first card and stops when the game is completed. Display the elapsed time in minutes and seconds.

 

Test your Memory Game to ensure it meets all requirements and behaves correctly in various scenarios, including matching cards, non-matching cards, game completion, and restarts.

 

(Optional) Challenge Requirements:
Add a star rating system based on the number of moves made by the player. The fewer moves, the higher the rating (e.g., 3 stars for the best performance, 1 star for the worst). Update the star rating as the player progresses.

Implement an optional difficulty setting that allows players to choose the size of the grid (e.g., 4x4, 6x6, 8x8). Adjust the number of card pairs and the star rating thresholds based on the selected difficulty.

Save the player's best time and star rating for each difficulty level using the browser's local storage. Display the best time and star rating on the game screen, and update them when the player achieves a better result.

Add animations and transitions to the game, such as flipping the cards, revealing matched pairs, and hiding non-matching pairs. Use CSS transitions, animations, or JavaScript to create a smooth and engaging user experience.

Make the game responsive and adaptable to different screen sizes and devices, ensuring a consistent user experience across desktops, tablets, and smartphones.

Include an instructions section that explains how to play the game, the star rating system, and the difficulty settings. The instructions should be concise and easily accessible from the main game screen.

Provide visual and/or audio feedback to the player when they make a match, complete the game, or achieve a new best time or star rating. This can include sound effects, pop-up messages, or changes to the game screen.

Implement accessibility features, such as keyboard navigation and screen reader compatibility, to ensure that the game is usable by players with different abilities and needs.

 

Submission: 
Submit your GitHub repo for grading.
