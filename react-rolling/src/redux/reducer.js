import {GET_POKEMONS, SEARCH_POKEMON} from './types'

const inicialState = { pokemon: [] , entrenadores: [], searchPokemon: []}

export const reducerroot = (state = inicialState, action) => {
    switch(action.type) {
        case GET_POKEMONS:
            return { ...state, pokemon: action.payload };
        case SEARCH_POKEMON:
            return {...state, searchPokemon: action.payload}
        default: 
            return state
    }
}