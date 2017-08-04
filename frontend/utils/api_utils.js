export const fetchAllPokemon = () => {
	return $.ajax({
		type: 'GET',
		url: 'http://localhost:3000/api/pokemon'
	});
}

export const fetchSinglePokemon = (pokemonId) => {
	return $.ajax({
		type: 'GET',
		url: `http://localhost:3000/api/pokemon/${pokemonId}`
	});
}

export const postPokemon = pokemon => {
	return $.ajax({
		TYPE: 'POST',
		url: 'http://localhost:3000/api/pokemon',
		data: pokemon
	})
}