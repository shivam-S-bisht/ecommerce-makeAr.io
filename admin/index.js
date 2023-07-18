import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './app.js';
import './css/index.css';

const root = ReactDOM.createRoot(global.document.querySelector('#root'));
root.render(
	<BrowserRouter>
		<Route path="/" component={App} />
	</BrowserRouter>,
);