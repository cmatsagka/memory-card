import Header from './components/Header';
import PlayingScreen from './screens/PlayingScreen';
import './styles/cards.css';

function App() {
	const mockCards = [
		{
			name: 'Planet Alpha',
			img: 'https://api.dicebear.com/7.x/bottts/svg?seed=Alpha',
		},
		{
			name: 'Planet Beta',
			img: 'https://api.dicebear.com/7.x/bottts/svg?seed=Beta',
		},
		{
			name: 'Planet Gamma',
			img: 'https://api.dicebear.com/7.x/bottts/svg?seed=Gamma',
		},
	];

	return (
		<div className="app-container">
			<Header />
			<PlayingScreen cards={mockCards} />
		</div>
	);
}

export default App;
