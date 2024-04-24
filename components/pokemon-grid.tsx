"use client";
import { PokemonCard } from "./pokemon-card";
import { ReactEventHandler, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Pokemon, PokemonGridProps } from "@/lib/types";
import Loader from "@/components/ui/Loader";
import { getPokemon, getPokemonList } from "@/lib/pokemonAPI";
import { useQuery } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";

export function PokemonGrid() {
  const [searchText, setSearchText] = useState("");
  const { control, handleSubmit } = useForm();
  const [page, setPage] = useState(0);

  // const { data: pokemonList, isLoading } = useQuery({
  //   queryKey: ["pokemonList", page, { keepPreviousData: true }],
  //   queryFn: () => getPokemonList(page),
  // });
  const { data: pokemonList, isLoading } = useQuery({
    queryKey: ["pokemonList", page, { keepPreviousData: true }],
    queryFn: () => {
      if (!searchText) {
        return getPokemonList(page);
      }
    },
  });
  if (isLoading) return <Loader />;

  const onSumbit = function (data: any) {
    setSearchText(data.searchText);
  };
  const filteredPokemonList = pokemonList.filter((pokemon: Pokemon) =>
    pokemon.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <div>
        <h3 className="text-2xl py-6 text-center">Search For Your Pokemon</h3>
        <div className="grid w-full max-w-sm items-center gap-1">
          <form onSubmit={handleSubmit(onSumbit)}>
            <Label htmlFor="pokemonName">Pokemon</Label>
            <div className="flex items-center">
              <Controller
                name="searchText"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                    type="text"
                    autoComplete="off"
                    id="pokemonName"
                    placeholder="Search for pokemon here..."
                  />
                )}
              />
              <button className="group rounded-lg border border-white m-3 px-5 py-1 hover:border-gray-300 hover:bg-black">
                Search
              </button>
            </div>
          </form>
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
          className="group rounded-lg border border-white m-3 px-5 py-1  hover:border-gray-300 hover:bg-black"
          onClick={() => setPage(page - 30)}
          disabled={!page}
        >
          Prev
        </button>
        <button
          className="group rounded-lg border border-white m-3 px-5 py-1  hover:border-gray-300 hover:bg-black"
          onClick={() => setPage(page + 30)}
        >
          Next
        </button>
      </div>
    </>
  );
}
