import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import vocabs from "../data/vocabs.json";

const SavedWords = () => {
	const [saves, setSaves] = useState([]);

	useEffect(() => {
		setSaves(JSON.parse(localStorage.getItem('saves') || '[]'));
	}, []);

	const removeWord = useCallback((word) => {
		var newsaves = saves.filter(w => w != word);
		localStorage.setItem('saves', JSON.stringify(newsaves));
		setSaves(newsaves);
	}, [saves]);

	return (
		<div className="container">
			<h1 className="mb-4">Kata Tersimpan</h1>
			<div className="row">
				{saves.map((word, index) => {
					return (
						<div key={word} className="col-md-4 mb-3">
							<div className="p-3 bg-light border rounded h-100">
								<button type="button" className="btn btn-danger btn-sm float-end" onClick={() => removeWord(word)}>Hapus</button>
								<h3 className="text-capitalize">
									<Link to={`/kata/${word}`} className="text-decoration-none text-black">{word}</Link>
								</h3>
								<p>{vocabs[word]}</p>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default SavedWords;