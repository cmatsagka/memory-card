import { useState, useEffect } from 'react';
import { save, load } from './utils/storage';
import Header from './components/Header';
import SetupScreen from './screens/SetupScreen';
import PlayingScreen from './screens/PlayingScreen';
import GameOverScreen from './screens/GameOverScreen';
import WinScreen from './screens/WinScreen';

function App() {
	const [gameState, setGameState] = useState('SETUP'); // SETUP | PLAYING | GAME_OVER
	const [finalScore, setFinalScore] = useState(0);
	const [highScore, setHighScore] = useState(() => load('highScore', 0));
	const [theme, setTheme] = useState('planets');
	const [level, setLevel] = useState('easy');
	const [collectedCards, setCollectedCards] = useState([]);

	useEffect(() => {
		save('highScore', highScore);
	}, [highScore]);

	return (
		<div className="app-container">
			<Header />
			{gameState === 'SETUP' && (
				<SetupScreen
					onStartGame={(themeChoice, levelChoice) => {
						setTheme(themeChoice);
						setLevel(levelChoice);
						setGameState('PLAYING');
					}}
				/>
			)}
			{gameState === 'PLAYING' && (
				<PlayingScreen
					theme={theme}
					level={level}
					onGameOver={(collectedCards) => {
						setCollectedCards(collectedCards);
						setFinalScore(collectedCards.length);
						if (collectedCards.length > highScore) {
							setHighScore(collectedCards.length);
						}
						setGameState('GAME_OVER');
					}}
					onWin={(collectedCards) => {
						setCollectedCards(collectedCards);
						setFinalScore(collectedCards.length);
						if (collectedCards.length > highScore) {
							setHighScore(collectedCards.length);
						}
						setGameState('WIN');
					}}
				/>
			)}
			{gameState === 'GAME_OVER' && (
				<GameOverScreen
					score={finalScore}
					collectedCards={collectedCards}
					onRestart={() => setGameState('SETUP')}
					highScore={highScore}
				/>
			)}
			{gameState === 'WIN' && (
				<WinScreen
					score={finalScore}
					collectedCards={collectedCards}
					onRestart={() => setGameState('SETUP')}
					highScore={highScore}
				/>
			)}
		</div>
	);
}

export default App;
