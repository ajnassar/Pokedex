import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import configureStore from './store/store';
import PokemonIndexContainer from './components/pokemon/pokemon_index_container';

document.addEventListener('DOMContentLoaded', () => {
	const store = configureStore();
	const rootEl = document.getElementById('root');
	
	const Root = () => (
		<Provider store={ store }>
			<HashRouter>
				<Route path="/" component={ PokemonIndexContainer }/>
			</HashRouter>
		</Provider>
	)

	ReactDOM.render(<Root store={ store }/>, rootEl);
});