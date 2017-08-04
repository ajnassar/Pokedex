import * as API from '../utils/api_utils';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";
export const START_LOADING_ALL_POKEMON = "START_LOADING_ALL_POKEMON";
export const START_LOADING_SINGLE_POKEMON = "START_LOADING_SINGLE_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
export const NEW_POKEMON = "NEW_POKEMON";


export const receivePokemon = pokemon => {
	type: RECEIVE_POKEMON,
	pokemon
}

export const newPokemon = () => {
	type: NEW_POKEMON
}

export const receiveAllPokemon = pokemon => ({
	type: RECEIVE_ALL_POKEMON,
	pokemon
});

export const receiveSinglePokemon = pokemon => ({
	type: RECEIVE_SINGLE_POKEMON,
	pokemon
});

export const startLoadingAllPokemon = () => ({
	type: START_LOADING_ALL_POKEMON
})

export const startLoadingSinglePokemon = () => ({
	type: START_LOADING_SINGLE_POKEMON
});

export const requestAllPokemon = () => {
	return (dispatch) => {
		dispatch(startLoadingAllPokemon());
		API.fetchAllPokemon().then(
			(response) => dispatch(receiveAllPokemon(response))
		);
	}		
}

export const requestSinglePokemon = (pokemonId) => {
	return (dispatch) => {
		dispatch(startLoadingSinglePokemon());
		API.fetchSinglePokemon(pokemonId).then(
			response => dispatch(receiveSinglePokemon(response))
		)
	}
}

export const createPokemon = pokemon => {
	return dispatch => {
		dispatch(newPokemon());
		API.postPokemon(pokemon).then(
			response => dispatch(receivePokemon(response))
		)
	}
}