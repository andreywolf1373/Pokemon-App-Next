"use client";
import { PokemonCard } from "./pokemon-card";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "@/lib/pokemonAPI";

interface PokemonGridProps {
  pokemonList: any;
}

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
  const [searchText, setSearchText] = useState("");

  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

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
        <h3 className="text-3xl pt-12 pb-6 text-center">PokemonList</h3>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-6 lg:text-left">
        {filteredPokemonList.map((pokemon: any) => {
          return (
            <PokemonCard
              name={pokemon.name}
              key={pokemon.name + "Card"}
              url={pokemon.url}
            />
          );
        })}
      </div>
    </>
  );
}
