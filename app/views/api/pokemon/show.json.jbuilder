json.(@pokemon, :id, :name, :attack, :defense, :poke_type)
json.image_url asset_path(@pokemon.image_url)
json.moves @pokemon.moves
json.items @pokemon.items do |item|
	json.(item, :id, :name, :pokemon_id, :price, :happiness)
	json.image_url asset_path(item.image_url)
end