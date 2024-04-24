"use client";
import { PokemonCard } from "./pokemon-card";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Pokemon, PokemonGridProps } from "@/lib/types";
import Loader from "@/components/ui/Loader";
import { getPokemonList } from "@/lib/pokemonAPI";
import { useQuery } from "@tanstack/react-query";

export function PokemonGrid() {
  const [searchText, setSearchText] = useState("");

  const [page, setPage] = useState(0);
  const { data: pokemonList, isLoading } = useQuery({
    queryKey: ["pokemonList", page, { keepPreviousData: true }],
    queryFn: () => getPokemonList(page),
  });
  if (isLoading) return <Loader />;

  const searchFilter = (pokemonList: Pokemon[]) => {
    return pokemonList.filter((pokemon: Pokemon) =>
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
        <h3 className="text-3xl pt-12 pb-6 text-center">Pokemon List</h3>
      </div>

      <div className="grid text-center grid-cols-6 xl:grid-cols-4 md:grid-cols-2">
        {filteredPokemonList.map((pokemon: Pokemon) => {
          return (
            <PokemonCard name={pokemon.name} key={pokemon.name + "Card"} />
          );
        })}
      </div>

      <div className="flex gap-8">
        <button
          className="group rounded-lg border border-white m-3 px-5 py-1"
          onClick={() => setPage(page - 30)}
          disabled={!page}
        >
          Prev
        </button>
        <button
          className="group rounded-lg border border-white m-3 px-5 py-1"
          onClick={() => setPage(page + 30)}
        >
          Next
        </button>
      </div>
    </>
  );
}
