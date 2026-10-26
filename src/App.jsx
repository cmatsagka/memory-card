import { useState, useEffect } from 'react';
import { save, load } from './utils/storage';
import Header from './components/Header';
import SetupScreen from './screens/SetupScreen';
import PlayingScreen from './screens/PlayingScreen';
import GameOverScreen from './screens/GameOverScreen';

function App() {
	const [gameState, setGameState] = useState('SETUP'); // SETUP | PLAYING | GAME_OVER
	const [finalScore, setFinalScore] = useState(0);
	const [highScore, setHighScore] = useState(() => load('highScore', 0));
	const [theme, setTheme] = useState('planets');

	useEffect(() => {
		save('highScore', highScore);
	}, [highScore]);

	return (
		<div className="app-container">
			<Header />
			{gameState === 'SETUP' && (
				<SetupScreen
					onSelectTheme={(selectedTheme) => {
						setTheme(selectedTheme);
						setGameState('PLAYING');
					}}
				/>
			)}
			{gameState === 'PLAYING' && (
				<PlayingScreen
					theme={theme}
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
					onRestart={() => setGameState('SETUP')}
					highScore={highScore}
				/>
			)}
		</div>
	);
}

export default App;
