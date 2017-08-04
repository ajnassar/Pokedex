import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({pokemon}) => {
	return (
		<li className="pokemon-index-item">
			<Link to={ `/pokemon/${pokemon.id}` } >
				<span className="pokemon-index-item--index">{ pokemon.id }</span>
				<img className="pokemon-index-item--img" src={ pokemon.image_url }></img>
				<span className="pokemon-index-item--name">{pokemon.name}</span>
			</Link>
		</li>
	)
}

export default PokemonIndexItem;