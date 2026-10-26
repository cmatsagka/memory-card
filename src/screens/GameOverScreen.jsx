function GameOverScreen({ score, onRestart, highScore }) {
	return (
		<div className="game-over">
			<h2>Oops!</h2>
			<p>You scored: {score}</p>
			<p className="high-score">High Score: {highScore}</p>
			<button onClick={onRestart}> Play Again</button>
		</div>
	);
}

export default GameOverScreen;
