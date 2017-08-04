import { connect } from 'react-redux';

import ItemDetails from './item_details';
import { selectPokemonItem } from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => ({
	item: selectPokemonItem(state, parseInt(match.params.itemId))
})

export default connect(mapStateToProps)(ItemDetails);