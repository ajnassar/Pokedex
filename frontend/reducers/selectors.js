import { values } from 'lodash';

export const selectAllPokemon = state => values(state.pokemon);

export const selectPokemonItem = ({ pokemonDetails }, itemId) => {
	const item = pokemonDetails.items.find(item => item.id === itemId)
	return item || {}
}