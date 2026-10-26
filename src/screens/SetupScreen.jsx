import { useState } from 'react';
import deckGenerator from '../constants/gameConfig';
import '../styles/SetupScreen.css';

function SetupScreen({ onStartGame }) {
	const [selectedTheme, setSelectedTheme] = useState('planets');
	const [selectedLevel, setSelectedLevel] = useState('easy');

	const claySample = deckGenerator('clay', 'easy')[0];
	const planetsSample = deckGenerator('planets', 'easy')[0];

	return (
		<div className="setup-screen">
			<div className="theme-setup">
				<h2>Choose your theme!</h2>
				<div className="theme-btn-section">
					<button
						className={`theme-card-btn ${selectedTheme === 'clay' ? 'active' : ''}`}
						onClick={() => setSelectedTheme('clay')}
					>
						{claySample && (
							<img
								src={claySample.img}
								alt="Clay theme preview"
								className="theme-preview-img"
							/>
						)}
					</button>
					<button
						className={`theme-card-btn ${selectedTheme === 'planets' ? 'active' : ''}`}
						onClick={() => setSelectedTheme('planets')}
					>
						{planetsSample && (
							<img
								src={planetsSample.img}
								alt="Planet theme preview"
								className="theme-preview-img"
							/>
						)}
					</button>
				</div>
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
