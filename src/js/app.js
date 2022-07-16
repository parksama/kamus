import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";
import { createRoot } from 'react-dom/client';

import Home from './pages/Home';
import Header from './pages/Header';

window.React = React;

const base_url = '/kamus/dist';
window.base_url = base_url;

const app = (
	<Router basename={base_url}>
		<Header />
		<Routes>
			<Route exact path="/" element={<Home />} />
			{/* <Route path="/import/product">
				<NewImportProduct />
			</Route>
			<Route path="/import/variant-meta">
				<VariantMeta />
			</Route>
			<Route path="/data-reconcile">
				<DataReconcile />
			</Route>
			<Route path="/data-transform">
				<DataTransform />
			</Route>
			<Route path="/bundle">
				<ProductBundle />
			</Route> */}
		</Routes>
	</Router>
);

const container = document.querySelector('#app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(app);
