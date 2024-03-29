"use client";

import { PokemonGrid } from "@/components/pokemon-grid";
import { PokemonCard } from "@/components/pokemon-card";
import Image from "next/image";
import { getPokemon, getPokemonList } from "@/lib/pokemonAPI";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/components/ui/Loader";

export default function Home() {
  const {
    data: pokemonList,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["pokemonList"],
    queryFn: getPokemonList,
    initialData: [],
  });

  console.log(isLoading);

  return <PokemonGrid pokemonList={pokemonList} />;
}
