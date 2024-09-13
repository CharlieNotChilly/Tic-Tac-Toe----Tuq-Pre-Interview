import GameState from "./GameState";

// GameOver function checks the current state of the game to determine if the game has ended.
// The function uses a switch statement to handle the different game states based on the value of gameState.

function GameOver({ gameState }) {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerOWins:
      return <div className="game-over">O Wins!!!</div>;
    case GameState.playerXWins:
      return <div className="game-over">X Wins!!!</div>;
    case GameState.draw:
      return <div className="game-over">Draw -_-</div>;
    default:
      return <></>;
  }
}

export default GameOver;
