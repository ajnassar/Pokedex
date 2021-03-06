import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';

const PokemonReducer = (state = {}, action) => {
	switch (action.type) {
		case RECEIVE_POKEMON:
			return action.pokemon;
		case RECEIVE_ALL_POKEMON:
			return action.pokemon;
		default:
			return state;
	}
}

export default PokemonReducer;