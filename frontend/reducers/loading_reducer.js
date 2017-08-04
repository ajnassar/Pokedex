import { 
	RECEIVE_ALL_POKEMON, 
	RECEIVE_SINGLE_POKEMON, 
	START_LOADING_SINGLE_POKEMON, 
	START_LOADING_ALL_POKEMON,
	NEW_POKEMON,
	RECEIVE_POKEMON } from '../actions/pokemon_actions';

const initialState = {
  indexLoading: false,
  detailsLoading: false
};

const LoadingReducer = (state = initialState, action) => {
	switch(action.type) {
		case RECEIVE_POKEMON:
			return Object.assign({}, state, { detailsLoading: false });
		case NEW_POKEMON:
			return Object.assign({}, state, { detailsLoading: false });
		case RECEIVE_ALL_POKEMON:
			return Object.assign({}, state, { indexLoading: false });
		case RECEIVE_SINGLE_POKEMON:
			return Object.assign({}, state, { detailsLoading: false });
		case START_LOADING_SINGLE_POKEMON:
			return Object.assign({}, state, { detailsLoading: true });
		case START_LOADING_ALL_POKEMON:
			return Object.assign({}, state, { indexLoading: true });
		default:
			return initialState;
	}
}

export default LoadingReducer;