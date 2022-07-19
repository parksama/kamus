import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BM25 from "okapibm25";
import vocabs from "../data/vocabs.json";

var allwords = Object.keys(vocabs);

const Search = () => {
	const [words, setWords] = useState([]);
	let { query } = useParams();

	useEffect(() => {
		if (query) {
			var regex = new RegExp(query, 'i');
			setWords(allwords.filter(word => regex.test(word)));

			// var result = BM25(allwords, query.split(' '), undefined, (firstEl, secondEl) => {
			// 	return secondEl.score - firstEl.score;
			// }).filter(r => r.score > 0).map(r => r.document);

			// setWords(result);
		}
	}, [query]);

	return (
		<div className="container">
			<h1 className="mb-4">Hasil Pencarian</h1>
			<div className="row">
				{words.length ? words.map((word, index) => {
					return (
						<div key={word} className="col-md-4 mb-3">
							<div className="p-3 bg-light border rounded h-100">
								<h3 className="text-capitalize">
									<Link to={`/kata/${word}`} className="text-decoration-none text-black">{word}</Link>
								</h3>
								<p>{vocabs[word]}</p>
							</div>
						</div>
					)
				}) : <p>Tidak ada hasil ditemukan.</p>}
			</div>
		</div>
	)
}

export default Search;