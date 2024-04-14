"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";

function PokemonAbilityPage() {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<{
    id: number;
    effect_entries: { effect: string; language: { name: string } }[];
  }>(["pokemonAbilityDetails"]);

  const language = data?.effect_entries[0]?.language?.name;
  const text = data?.effect_entries[0]?.effect;

  return <h1 className="w-1/2">{text}</h1>;
}

export default PokemonAbilityPage;
