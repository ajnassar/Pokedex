import React from 'react';

const ItemDetails = ({item}) => {
	return (
		<div>
			<ul>
				<li>Item Name: {item.name}</li>
				<li>Price: {item.price}</li>
				<li>Hapiness:  {item.hapiness}</li>
			</ul>
		</div>
	)	
}

export default ItemDetails;