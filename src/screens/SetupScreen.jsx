import { useState } from 'react';
import deckGenerator from '../constants/gameConfig';
import '../styles/SetupScreen.css';

const THEME_PREVIEWS = {
	clay: deckGenerator('clay', 'easy')[0],
	planets: deckGenerator('planets', 'easy')[0],
};

function SetupScreen({ onStartGame }) {
	const [selectedTheme, setSelectedTheme] = useState('planets');
	const [selectedLevel, setSelectedLevel] = useState('easy');

	const themes = [
		{ id: 'clay', alt: 'Clay theme preview' },
		{ id: 'planets', alt: 'Planet theme preview' },
	];

	const levels = ['easy', 'medium', 'hard'];

	return (
		<div className="setup-screen">
			<div className="theme-setup">
				<h2>Choose your theme!</h2>
				<div className="theme-btn-section">
					{themes.map(({ id, alt }) => {
						const sampleCard = THEME_PREVIEWS[id];
						return (
							<button
								key={id}
								className={`theme-card-btn ${selectedTheme === id ? 'active' : ''}`}
								onClick={() => setSelectedTheme(id)}
							>
								{sampleCard && (
									<img
										src={sampleCard.img}
										alt={alt}
										className="theme-preview-img"
									/>
								)}
							</button>
						);
					})}
				</div>
			</div>

			<div className="level-setup">
				<h2>Level</h2>
				{levels.map((lvl) => (
					<button
						key={lvl}
						className={selectedLevel === lvl ? 'active' : ''}
						onClick={() => setSelectedLevel(lvl)}
					>
						{lvl.charAt(0).toUpperCase() + lvl.slice(1)}
					</button>
				))}
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
