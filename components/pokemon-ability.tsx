// "use client";

// import { getPokemonAbilityInfo } from "@/lib/pokemonAPI";
// import { PokemonAbility } from "@/lib/types";
// import { changeToUpperCase } from "@/lib/utils";
// import { useQuery } from "@tanstack/react-query";

// function PokemonAbilitiesItem({ ability }: PokemonAbility) {
//   const abilityName = ability.ability.name;

//   const abilityUrl = ability.ability.url;

//   const { data } = useQuery({
//     queryKey: ["pokemonAbility"],
//     queryFn: () => getPokemonAbilityInfo(abilityUrl),
//   });

//   return (
//     <div>
//       <p>{changeToUpperCase(abilityName)}</p>
//     </div>
//   );
// }

// export default PokemonAbilitiesItem;
