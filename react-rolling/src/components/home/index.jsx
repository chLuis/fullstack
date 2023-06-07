import { useSelector, useDispatch } from "react-redux";
import { getPokemons, searchPokemon } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
export const Home = () => {
  const { pokemon, searchPokemon: buscarPokemon } = useSelector(
    (state) => state
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputSearchPokemon, setInputSearchPokemon] = useState("");

  const traerData = () => {
    dispatch(getPokemons());
  };

  const valuePokemon = (e) => {
    setInputSearchPokemon(e.target.value);
  }

  const searchData = () => {
    let pokemonBuscado = pokemon.find((item) => item.name === inputSearchPokemon);
    console.log("Pokemon buscado:", pokemonBuscado)
    if (pokemonBuscado) {
      dispatch(searchPokemon(pokemonBuscado));
    } else {
      alert(`Pokemon ${inputSearchPokemon} no encontrado`);
    }
  }
  const changeRoute = () => {
    navigate("/create");
  };
  const buscar = (event) => {
    if (event.key === "Enter") {
      searchData();
    }
  }

  console.log(useSelector((pepe) => pepe))
  return (
    <div>
      {/* {pokemon?.map((item, index) => {
        return <p key={index}>{item.name}</p>;
      })} */}
      <button onClick={traerData}>Traer</button>
      <input type="text" id="buscarPokemon" value={inputSearchPokemon} onChange={(e) => valuePokemon(e)} onKeyDown={buscar}></input>
      <button onClick={()=> searchData()}>Buscar</button>
      <button onClick={changeRoute}>llevame a crear un pokemon</button>
      <div>
      <h5>Pokemon buscado:</h5>
      <p>{buscarPokemon.name}</p>
      <a href={buscarPokemon.url}>Ver mas</a>
      </div>
    </div>
  );
};
