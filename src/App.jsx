import { useState } from 'react';
import Header from './components/Header';
import PlayingScreen from './screens/PlayingScreen';
import GameOverScreen from './screens/GameOverScreen';

function App() {
	const [gameState, setGameState] = useState('PLAYING');
	const [finalScore, setFinalScore] = useState(0);

	return (
		<div className="app-container">
			<Header />
			{gameState === 'PLAYING' && (
				<PlayingScreen
					onGameOver={(score) => {
						setFinalScore(score);
						setGameState('GAME_OVER');
					}}
				/>
			)}
			{gameState === 'GAME_OVER' && (
				<GameOverScreen
					score={finalScore}
					onRestart={() => setGameState('PLAYING')}
				/>
			)}
		</div>
	);
}

export default App;
