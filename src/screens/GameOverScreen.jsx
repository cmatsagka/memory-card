function GameOverScreen({ score, onRestart }) {
	return (
		<div className="game-over">
			<h2>Oops!</h2>
			<p>You scored: {score}</p>
			<button onClick={onRestart}> Play Again</button>
		</div>
	);
}

export default GameOverScreen;
