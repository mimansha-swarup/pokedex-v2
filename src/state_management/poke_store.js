import { makeAutoObservable } from "mobx";
import axios from 'axios';
// import { apiGet, apiPostPut } from "../../resources/api_calls/api_methods";
import {pokemonDetailsUrl,pokemonSpeciesUrl} from "../resources/apiURL";

class PokeStore {
	allPokemons = {}
  RenderPokemonDetailsList = [];
  loading = false;
  gen="Kanto";

  constructor() {
    makeAutoObservable(this);
  }

  fetchPokemon = (region) => {
	  if(this.allPokemons[region.name].length<0)
			this.loadRegionalPokemons(region.start,region.end,region.name)

		this.RenderPokemonDetailsList = this.allPokemons[region.name]		

  }

  loadRegionalPokemons = async (start,end,name) => {
		
    if (this.loading) {
      alert("loading try again later..");
      return;
    }

    console.log("getting pokemons from PokeAPI");
    this.loading = true;
		
		const allPokemonData = [];
		const allPokemonSpeciesData = [];
		
		for (let i = start; i <= end; i += 1) {
			await axios.all([
				axios.get(pokemonDetailsUrl(i)),
				axios.get(pokemonSpeciesUrl(i)),
			]).then(
				axios.spread(
					(pokemonRes,pokemonSpeciesRes) =>{
						allPokemonData.push(pokemonRes.data);
						allPokemonSpeciesData.push(pokemonSpeciesRes.data);
					}
				)
			)		
		}
		
		const mergedData = allPokemonData.map((pokemon, i) => ({
			
			...pokemon,
			...allPokemonSpeciesData[i],
		}))

		this.RenderPokemonDetailsList = mergedData

		this.loading = false;
		console.log("loaded")
		console.log(this.RenderPokemonDetailsList)
		// this.allPokemons[name] = mergedData
    
		
  };




   
  }
  export default new PokeStore();
  