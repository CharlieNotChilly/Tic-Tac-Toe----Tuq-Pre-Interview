import GameState from "./GameState";

//Reset the game if the game is over.


function GameReset({ gameState, onReset }) {
  if (gameState === GameState.inProgress) {
    return;
  }
  return (
    <button onClick={onReset} className="reset-button">
      Play Again
    </button>
  );
}

export default GameReset;
