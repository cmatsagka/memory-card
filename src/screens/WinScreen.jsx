function WinScreen({ score, collectedCards, onRestart, highScore }) {
	return (
		<div className="game-over win-screen">
			<h2>You Won!</h2>
			<div className="score-section">
				<p>Incredible memory! You collected all {score} cards!</p>
				<p className="high-score">High Score: {highScore}</p>
			</div>

			<h3>Your Complete Collection:</h3>
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

export default WinScreen;
