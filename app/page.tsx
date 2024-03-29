"use client";

import { PokemonGrid } from "@/components/pokemon-grid";
import Image from "next/image";
import { getPokemonList } from "@/lib/pokemonAPI";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/components/ui/Loader";
import { useState } from "react";

export default function Home() {
  const { data: pokemonList, isError } = useQuery({
    queryKey: ["pokemonList"],
    queryFn: getPokemonList,
    initialData: [],
  });

  return <PokemonGrid pokemonList={pokemonList} />;
}
