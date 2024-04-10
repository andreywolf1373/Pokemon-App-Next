"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

function PokemonAbilityPage() {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<{
    effect_entries: { effect: string }[];
  }>(["pokemonAbilityDetails"]);
  const text = data?.effect_entries[0]?.effect;

  return <h1>{text}</h1>;
}

export default PokemonAbilityPage;
