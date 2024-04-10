// "use client";

import { getPokemonAbilityInfo } from "@/lib/pokemonAPI";
import { PokemonAbility } from "@/lib/types";
import { changeToUpperCase } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

interface Props {
  pokemonAbility: PokemonAbility;
}

function PokemonAbilitiesItem({ pokemonAbility }: Props) {
  const name = pokemonAbility.ability.name;
  const { data } = useQuery({
    queryKey: ["pokemonAbilityDetails"],
    queryFn: () => getPokemonAbilityInfo(pokemonAbility.ability.url),
  }); // TODO pokemonAbilityDetails as modal?

  return <p> {changeToUpperCase(name)}</p>;
}

export default PokemonAbilitiesItem;
