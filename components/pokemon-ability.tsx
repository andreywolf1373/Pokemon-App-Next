// "use client";

import { getPokemonAbilityInfo } from "@/lib/pokemonAPI";
import { PokemonAbility } from "@/lib/types";
import { changeToUpperCase } from "@/lib/utils";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

interface Props {
  pokemonAbility: PokemonAbility;
}

function PokemonAbilitiesItem({ pokemonAbility }: Props) {
  const name = pokemonAbility.ability.name;
  const queryClient = useQueryClient();
  const pokemonName = queryClient.getQueryData(["pokemonData"]);

  const { data } = useQuery({
    queryKey: ["pokemonAbilityDetails"],
    queryFn: () => getPokemonAbilityInfo(pokemonAbility.ability.url),
  }); // TODO pokemonAbilityDetails as modal/dynamic route  ?

  return (
    <Link href={`${(pokemonName as { name?: string })?.name}/${name}`}>
      {changeToUpperCase(name)}
    </Link>
  );
}

export default PokemonAbilitiesItem;
