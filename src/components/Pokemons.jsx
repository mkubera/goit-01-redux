import React, { useState } from "react";
import { useGetPokemonByNameQuery } from "./../services/pokemon";

const Pokemons = ({ pokemonName }) => {
  const [pokemonName2, setPokemonName2] = useState("pikachu");
  // Using a query hook automatically fetches data and returns query values
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName2);

  console.log(data);

  return (
    <>
      <div>
        <button onClick={() => setPokemonName2("charizard")}>
          Set Charizard
        </button>
        <button onClick={() => setPokemonName2("pikachu")}>Set Pikachu</button>
        <button onClick={() => setPokemonName2("bulbasaur")}>
          Set Bulbasaur
        </button>
        <div>
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <>Loading...</>
          ) : data ? (
            <>
              <h3>{data.species.name}</h3>
              <img src={data.sprites.front_shiny} alt={data.species.name} />
            </>
          ) : null}
        </div>
      </div>
      {/* <div>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data.species.name}</h3>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
          </>
        ) : null}
      </div> */}
    </>
  );
};

export default Pokemons;
