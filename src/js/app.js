import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter,
	Routes,
	Route,
	Link
} from "react-router-dom";
import { createRoot } from 'react-dom/client';

import Home from './pages/Home';
import Header from './pages/Header';
import SavedWords from './pages/SavedWords';
import Search from './pages/Search';

window.React = React;

const container = document.querySelector('#app');
const base_url = container.dataset.baseurl;
window.base_url = base_url;

const app = (
	<BrowserRouter basename={base_url}>
		<Header />
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route path="/simpanan" element={<SavedWords />} />
			<Route path="/kata/:kata" element={<Home />} />
			<Route path="/cari/:query" element={<Search />} />
		</Routes>
	</BrowserRouter>
);

const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(app);
