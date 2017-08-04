import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailsContainer from './pokemon_details_container';
import PokemonFormContainer from './pokemon_form_container';
import LoadingIcon from './loading_icon';

class PokemonIndex extends Component {

	componentDidMount() {
		this.props.requestAllPokemon();
	}

	render() {
		const { pokemon, loading } = this.props
		const pokemonItems = pokemon.map(mon => <PokemonIndexItem key={ mon.id } pokemon={ mon } />)
		
		if (loading) {
			return <LoadingIcon />
		}

		return (
			<section className="pokedex">
				<ul>
					{ pokemonItems }
				</ul>
				<Route exact path="/" component={ PokemonFormContainer } />
				<Route path="/pokemon/:pokemonId" component={ PokemonDetailsContainer } />
			</section> 
		)
	}
}

export default PokemonIndex