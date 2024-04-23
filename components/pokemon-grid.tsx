"use client";
import { PokemonCard } from "./pokemon-card";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Pokemon, PokemonGridProps } from "@/lib/types";
import Loader from "@/components/ui/Loader";

export function PokemonGrid({ pokemonList, isLoading }: PokemonGridProps) {
  const [searchText, setSearchText] = useState("");

  const searchFilter = (pokemonList: Pokemon[]) => {
    return pokemonList.filter((pokemon: Pokemon) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };
  if (isLoading) return <Loader />;

  const filteredPokemonList = searchFilter(pokemonList);

  return (
    <>
      <div>
        <h3 className="text-2xl py-6 text-center">Search For Your Pokemon</h3>
        <div className="grid w-full max-w-sm items-center gap-1">
          <Label htmlFor="pokemonName">Pokemon</Label>
          <Input
            type="text"
            value={searchText}
            autoComplete="off"
            id="pokemonName"
            placeholder="Search for pokemon here..."
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <h3 className="text-3xl pt-12 pb-6 text-center">Pokemon List</h3>
      </div>

      <div className="mb-32 grid text-center xl:mb-0 xl:grid-cols-4 xl:text-left">
        {filteredPokemonList.map((pokemon: Pokemon) => {
          return (
            <PokemonCard name={pokemon.name} key={pokemon.name + "Card"} />
          );
        })}
      </div>
    </>
  );
}
