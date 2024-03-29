"use client";

import { getPokemon } from "@/lib/pokemonAPI";
import Image from "next/image";
import { PokemonImage } from "@/components/pokemon-image";
import { Progress } from "@/components/ui/progress";
import { changeToUpperCase } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Loader from "@/components/ui/Loader";

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
    initialData: {},
  });

  if (!pokemonObject || !pokemonObject === undefined)
    return <h2>NO DATA BLYAT</h2>;

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
      <h3>Weight: {pokemonObject.weight}</h3>
      <div className="flex-col">
        {pokemonObject?.stats?.map((statObject: any) => {
          const statName = changeToUpperCase(statObject.stat.name);
          const statValue = statObject.base_stat;
          return (
            <div className="flex items-stretch w-96" key={statName}>
              <h3 className="p-3 w-2/4">
                {statName}: {statValue}
              </h3>
              <Progress className="w-2/4 m-auto" value={statValue} />
            </div>
          );
        })}
      </div>
    </>
  );
}
