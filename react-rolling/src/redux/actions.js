import axios from "axios"
import {URL, GET_POKEMONS, SEARCH_POKEMON} from "./types"

export const getPokemons = () => {
    return async function(dispatch) {
        try{
            let dataApi = await axios.get(URL)
            return dispatch({ 
                type: GET_POKEMONS,
                payload: dataApi.data.results
            })
        }
        catch (error) {
            return error
        }
    }
}

export const searchPokemon = (pokemonBuscado) => {
    
    //const infoFiltrada = infoApi.find(e => e.name === pokemon) // Logica para hacer el filter
    return {
        type: SEARCH_POKEMON,
        payload: pokemonBuscado
    }
}