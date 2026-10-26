function SetupScreen({ onSelectTheme }) {
	return (
		<div className="setup-screen">
			<h2>Choose your theme!</h2>
			<button onClick={() => onSelectTheme('clay')}>Clay</button>
			<button onClick={() => onSelectTheme('planets')}>Planets</button>
		</div>
	);
}

export default SetupScreen;
