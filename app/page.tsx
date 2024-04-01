"use client";

import { PokemonGrid } from "@/components/pokemon-grid";
import Image from "next/image";
import { getPokemonList } from "@/lib/pokemonAPI";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/components/ui/Loader";

export default function Home() {
  const {
    data: pokemonList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["pokemonList"],
    queryFn: getPokemonList,
  });

  if (!pokemonList) return <Loader />;

  return <PokemonGrid pokemonList={pokemonList} isLoading={isLoading} />;
}
