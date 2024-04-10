"use client";

import { getPokemon, getPokemonSpecies } from "@/lib/pokemonAPI";

import { PokemonImage } from "@/components/pokemon-image";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/components/ui/Loader";
import { PokemonAbility, PokemonStat, PokemonTypes } from "@/lib/types";
import PokemonType from "@/components/pokemon-type";
import PokemonAbilitiesItem from "@/components/pokemon-ability";
import PokemonStats from "@/components/pokemon-stats";

export default function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;

  const {
    data: pokemonObject,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["pokemonData"],
    queryFn: () => getPokemon(pokemonName),
  });

  if (!pokemonObject) return <Loader />;

  if (isError) return <h2> There is an error fetching data! </h2>;

  return (
    <>
      <h1 className="text-4xl text-bold pt-4">
        {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
      </h1>
      <div className="m-4 relative w-52 h-52">
        <PokemonImage
          image={
            pokemonObject?.sprites?.other["official-artwork"].front_default
          }
          name={pokemonName}
        />
      </div>
      <h3>
        Pokemon type:
        {pokemonObject &&
          pokemonObject?.types?.map((pokemonItem: PokemonTypes) => (
            <PokemonType
              pokemonObject={pokemonObject}
              pokemonItem={pokemonItem}
              key={pokemonItem.type.name}
            />
          ))}
      </h3>
      <h3>Weight: {pokemonObject.weight}</h3>
      <div className="flex-col">
        {isLoading && <Loader />}
        {pokemonObject?.stats?.map((statObject: PokemonStat) => (
          <PokemonStats statObject={statObject} key={statObject.stat.name} />
        ))}
      </div>
      <div className="flex align-center mb-20 gap-32">
        <h3>Abillities: </h3>
        <div className="flex gap-10">
          {pokemonObject &&
            pokemonObject.abilities?.map((pokemonAbility: PokemonAbility) => (
              <PokemonAbilitiesItem
                pokemonAbility={pokemonAbility}
                key={pokemonAbility.slot}
              />
            ))}
        </div>
      </div>
    </>
  );
}
