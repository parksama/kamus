import { useEffect, useState } from "react";
import vocabs from "../data/vocabs.json";

const Home = () => {
	const keys = Object.keys(vocabs);

	const [word, setWord] = useState();

	function randomize() {
		setWord(keys[Math.floor(Math.random()*keys.length)]);
	}

	useEffect(() => {
		randomize();
	}, []);

	return (
		<div className="container">
			<h1>Welcome</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt est eu est tincidunt lobortis.
			</p>

			<div className="mt-5 mb-4">
				<div className="h3 p-3 text-capitalize bg-dark text-white rounded shadow mb-3">
					{word}
				</div>
				<div className="h4 fw-normal p-3 bg-light border rounded" style={{minHeight: '10rem'}}>
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