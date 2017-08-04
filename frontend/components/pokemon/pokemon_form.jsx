import React from 'react';

class PokemonForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			attack: '',
			defense: '',
			poke_type: '',
			move1: '',
			move2: '',
			image_url: '',
		}

		this.update = this.update.bind(this);
	}

	update(property) {
		return e => this.setState({ [property]: e.target.value })
	}


	render() {
		return(
			<form>
				<input value={this.state.name} onChange={ this.update('name') }></input>
				<input value={this.state.image_url} onChange={ this.update('image_url') }></input>
				<input value={this.state.attack} onChange={ this.update('attack') }></input>
				<input value={this.state.defense} onChange={ this.update('defense') }></input>
				<select>
					
				</select>
				<input value={this.state.move1} onChange={ this.update('move1') }></input>
				<input value={this.state.move2} onChange={ this.update('move2') }></input>
			</form>
		)
		
	}
}

export default PokemonForm;