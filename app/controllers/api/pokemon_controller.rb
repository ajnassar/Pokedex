class Api::PokemonController < ApplicationController
	def index
		sleep 0.5
		@pokemon = Pokemon.all
		render :index
	end

	def show
		sleep 0.5
		@pokemon = Pokemon.find(params[:id])
		render :show
	end

	def create
		@pokemon = Pokemon.new(pokemon_params)

		if @pokemon.save!
			render :show
		else
			render json: @pokemon.errors.full_messages, status: 422
		end
	end

	private 
	def pokemon_params
	    params
	    .require(:pokemon)
	    .permit(:image_url, :attack, :defense, :name, :poke_type, moves: [])
	end
end
