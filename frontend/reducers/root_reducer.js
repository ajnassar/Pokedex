import { combineReducers } from 'redux';

import PokemonReducer from './pokemon_reducer';
import PokemonDetailsReducer from './pokemon_details_reducer';
import LoadingReducer from './loading_reducer';

export default combineReducers({
	pokemon: PokemonReducer,
	pokemonDetails: PokemonDetailsReducer,
	loading: LoadingReducer
});