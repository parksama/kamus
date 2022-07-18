import { useCallback, useEffect, useState } from "react";
import vocabs from "../data/vocabs.json";

const Home = () => {
	const keys = Object.keys(vocabs);

	const [word, setWord] = useState('');
	const [saves, setSaves] = useState([]);
	const [saved, setSaved] = useState(false);

	function randomize() {
		setWord(keys[Math.floor(Math.random() * keys.length)]);
	}

	const saveWord = useCallback(() => {
		var newsaves = [...saves, word];
		localStorage.setItem('saves', JSON.stringify(newsaves));
		setSaves(newsaves);
	}, [word, saves]);

	useEffect(() => {
		setSaves(JSON.parse(localStorage.getItem('saves') || '[]'));
		randomize();
	}, []);

	useEffect(() => {
		setSaved(saves.includes(word));
	}, [word, saves]);

	return (
		<div className="container">
			<h1>Welcome</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt est eu est tincidunt lobortis.
			</p>

			<div className="mt-5 mb-4">
				<div className="p-3 bg-dark text-white rounded shadow mb-3 d-flex justify-content-between align-items-center">
					<h3 className="text-capitalize">
						{word}
					</h3>
					<button type="button" className="btn p-0" style={{fontSize: '1.6rem'}} onClick={saveWord}>
						{saved ? '💖' : '🤍'}
					</button>
				</div>
				<div className="h4 fw-normal p-3 bg-light border rounded" style={{ minHeight: '10rem' }}>
					{vocabs[word]}
				</div>
			</div>

			<div className="text-center">
				<button type="button" className="btn btn-success btn-lg" onClick={randomize}>Kata Berikutnya</button>
			</div>
		</div>
	)
}

export default Home;