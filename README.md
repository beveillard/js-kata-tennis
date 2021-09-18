# Tennis

A tennis match is composed of points, games and sets. The rules of counting points within a game are exposed next. Your task is to implement this logic and expose a method which returns the current score as a string for display.

- Each player can have either of these points in one game: 0, 15, 30 and 40.
- If you have 40 and you win the ball, you win the game.
- However:
  - If both have 40 the players are "deuce".
  - If the game is deuce, the winner of a ball will have "advantage".
  - If the player with advantage wins the ball he wins the game.
  - If the player without advantage wins they are back at deuce.

# Run
npm test
