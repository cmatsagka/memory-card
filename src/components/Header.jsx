import '../styles/Header.css';

function Header({ gameState, score }) {
	if (
		gameState === 'SETUP' ||
		gameState === 'WIN' ||
		gameState === 'GAME_OVER'
	) {
		return (
			<div className="header centered-header">
				<h1>
					{(gameState === 'SETUP' ||
						gameState === 'WIN' ||
						gameState === 'GAME_OVER') &&
						'Memory Card Game'}
				</h1>
			</div>
		);
	}
	if (gameState === 'PLAYING') {
		return (
			<header className="header playing-header">
				<h2 className="game-mini-title">Memory Card Game</h2>
				<div className="score-badge">Score: {score}</div>
			</header>
		);
	}
	return null;
}

export default Header;
