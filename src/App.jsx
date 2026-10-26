import { useState, useEffect } from 'react';
import { save, load } from './utils/storage';
import Header from './components/Header';
import PlayingScreen from './screens/PlayingScreen';
import GameOverScreen from './screens/GameOverScreen';

function App() {
	const [gameState, setGameState] = useState('PLAYING');
	const [finalScore, setFinalScore] = useState(0);
	const [highScore, setHighScore] = useState(() => load('highScore', 0));

	useEffect(() => {
		save('highScore', highScore);
	}, [highScore]);

	return (
		<div className="app-container">
			<Header />
			{gameState === 'PLAYING' && (
				<PlayingScreen
					onGameOver={(score) => {
						setFinalScore(score);
						if (score > highScore) {
							setHighScore(score);
						}
						setGameState('GAME_OVER');
					}}
				/>
			)}
			{gameState === 'GAME_OVER' && (
				<GameOverScreen
					score={finalScore}
					onRestart={() => setGameState('PLAYING')}
					highScore={highScore}
				/>
			)}
		</div>
	);
}

export default App;
