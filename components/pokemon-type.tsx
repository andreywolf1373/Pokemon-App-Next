import { getPokemonInfo } from "@/lib/pokemonAPI";
import { PokemonSpecies, PokemonTypes } from "@/lib/types";
import { changeToUpperCase } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

interface Props {
  pokemonItem: PokemonTypes;
  pokemonObject: PokemonSpecies;
}

function PokemonType({ pokemonItem, pokemonObject }: Props) {
  const { data: pokemonSpicies } = useQuery({
    queryKey: ["pokemonType", pokemonItem],
    queryFn: () => getPokemonInfo(pokemonObject.species.url),
  });

  const pokemonColor = pokemonSpicies?.color.name;

  return (
    <div className="grid grid-cols-1">
      <p
        className="text-center mt-3 rounded-xl border-4 p-1"
        style={{ borderColor: pokemonColor }}
      >
        {changeToUpperCase(pokemonItem?.type?.name)}
      </p>
    </div>
  );
}

export default PokemonType;
