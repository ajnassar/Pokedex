import { connect } from 'react-redux';
import PokemonDetails from './pokemon_details';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

const mapStateToProps = state => ({
	pokemonDetails: state.pokemonDetails,
	loading: state.loading.detailsLoading
});

const mapDispatchToProps = dispatch => ({
	requestSinglePokemon: (pokemonId) => dispatch(requestSinglePokemon(pokemonId))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PokemonDetails);