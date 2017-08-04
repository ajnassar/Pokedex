import React from 'react';
import { Route } from 'react-router-dom';
import { isEmpty } from 'lodash';

import ItemDetailsContainer from '../item/item_details_container';
import Item from '../item/item';
import LoadingIcon from './loading_icon';

class PokemonDetails extends React.Component {
	componentDidMount() {
		this.props.requestSinglePokemon(this.props.match.params.pokemonId);
	}

	componentWillReceiveProps(newProps) {
		if (this.props.match.params.pokemonId !== newProps.match.params.pokemonId) {
			this.props.requestSinglePokemon(newProps.match.params.pokemonId);		
		}
	}

	render() {
		const { pokemonDetails, loading } = this.props;
		if (loading || isEmpty(pokemonDetails)) {
			return <div className="pokemon-details"><LoadingIcon /></div>
		}

		return (
			<div className="pokemon-details">
				<img className="pokemon-image--large" src={ pokemonDetails.image_url }></img>
				<div>
					<ul>
						<li><h1>Name: { pokemonDetails.name }</h1></li>
						<li>Type: { pokemonDetails.poke_type }</li>
						<li>Attack: { pokemonDetails.attack }</li>
						<li>Defense: { pokemonDetails.defense }</li>
						<li>Moves: { pokemonDetails.moves.join(', ') }</li>
					</ul>
				</div>
				
				<div className="toys">
					<h1>Toys</h1>
					<ul className="toy-list">
						{ pokemonDetails.items.map((item)=><Item key={item.id} item={item}/>) }
					</ul>
				</div>
				<Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailsContainer} />
			</div>

			
		)
	}
}

export default PokemonDetails;