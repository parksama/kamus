import { useCallback, useEffect, useState } from "react";
import StyledTrans from "../components/StyledTrans";
import vocabs from "../data/vocabs.json";
import { useParams, useNavigate } from 'react-router-dom';

const words = Object.keys(vocabs);

const Home = () => {

	let navigate = useNavigate();
	let { kata } = useParams();
	// console.log({ kata });

	const [word, setWord] = useState(kata);
	const [saves, setSaves] = useState([]);
	const [saved, setSaved] = useState(false);

	function get_random_word() {
		return words[Math.floor(Math.random() * words.length)];
	}

	function randomize() {
		navigate(`/kata/${get_random_word()}`);
	}

	const saveWord = useCallback(() => {
		var newsaves = [...saves, word];
		localStorage.setItem('saves', JSON.stringify(newsaves));
		setSaves(newsaves);
	}, [word, saves]);

	useEffect(() => {
		// load saves from localStorage
		setSaves(JSON.parse(localStorage.getItem('saves') || '[]'));
	}, []);

	useEffect(() => {
		// toggle saved or not
		setSaved(saves.includes(word));
	}, [word, saves]);

	useEffect(() => {
		setWord(kata || get_random_word());
	}, [kata]);

	return (
		<div className="container">
			{!kata && <>
				<h1>Selamat datang</h1>
				<p className="mb-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt est eu est tincidunt lobortis.
				</p>
			</>}

			<div className="mb-4">
				<div className="p-3 bg-dark text-white rounded shadow mb-3 d-flex justify-content-between align-items-center">
					<h3 className="text-capitalize">
						{word}
					</h3>
					<button type="button" className="btn p-0" style={{ fontSize: '1.6rem' }} onClick={saveWord}>
						{saved ? '💖' : '🤍'}
					</button>
				</div>
				<div className="h4 fw-normal p-3 bg-light border rounded" style={{ minHeight: '10rem' }}>
					<StyledTrans text={vocabs[word] || 'Tidak ada translasi.'} />
				</div>
			</div>

			<div className="text-center mb-4">
				<button type="button" className="btn btn-success btn-lg" onClick={randomize}>Kata Berikutnya</button>
			</div>
		</div>
	)
}

export default Home;