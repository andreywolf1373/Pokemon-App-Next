"use client";

import { PokemonGrid } from "@/components/pokemon-grid";

import { getPokemonList } from "@/lib/pokemonAPI";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Loader from "@/components/ui/Loader";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(0);
  const { data: pokemonList, isLoading } = useQuery({
    queryKey: ["pokemonList", page, { keepPreviousData: true }],
    queryFn: () => getPokemonList(page),
  });

  if (isLoading) return <Loader />;

  return (
    <>
      <PokemonGrid pokemonList={pokemonList} isLoading={isLoading} />
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

// add fix width V
// add pagination V
// debouns search watch info or add submit
