import '../styles/GameOverScreen.css';

function GameOverScreen({ score, collectedCards, onRestart, highScore }) {
	return (
		<div className="game-over">
			<h2>Oops!</h2>
			<div className="score-section">
				<p>You scored: {score}</p>
				<p className="high-score">High Score: {highScore}</p>
			</div>

			<h3>Cards You Collected:</h3>
			<div className="collected-cards-grid">
				{collectedCards.map((card, index) => (
					<div key={index} className="collected-card-item">
						<img src={card.img} alt={card.name} />
						<span>{card.name}</span>
					</div>
				))}
			</div>
			<button onClick={onRestart}> Play Again</button>
		</div>
	);
}

export default GameOverScreen;
