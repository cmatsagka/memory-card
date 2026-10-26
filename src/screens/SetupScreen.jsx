import { useState } from 'react';

function SetupScreen({ onStartGame }) {
	const [selectedTheme, setSelectedTheme] = useState('planets');
	const [selectedLevel, setSelectedLevel] = useState('easy');
	return (
		<div className="setup-screen">
			<div className="theme-setup">
				<h2>Choose your theme!</h2>
				<button
					className={selectedTheme === 'clay' ? 'active' : ''}
					onClick={() => setSelectedTheme('clay')}
				>
					Clay
				</button>
				<button
					className={selectedTheme === 'planets' ? 'active' : ''}
					onClick={() => setSelectedTheme('planets')}
				>
					Planets
				</button>
			</div>

			<div className="level-setup">
				<h2>Level</h2>
				<button
					className={selectedLevel === 'easy' ? 'active' : ''}
					onClick={() => setSelectedLevel('easy')}
				>
					Easy
				</button>
				<button
					className={selectedLevel === 'medium' ? 'active' : ''}
					onClick={() => setSelectedLevel('medium')}
				>
					Medium
				</button>
				<button
					className={selectedLevel === 'hard' ? 'active' : ''}
					onClick={() => setSelectedLevel('hard')}
				>
					Hard
				</button>
			</div>

			<button
				className="start-btn"
				onClick={() => onStartGame(selectedTheme, selectedLevel)}
			>
				Start Game
			</button>
		</div>
	);
}

export default SetupScreen;
