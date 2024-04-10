import { getPokemonSpecies } from "@/lib/pokemonAPI";
import { PokemonSpecies, PokemonTypes } from "@/lib/types";
import { changeToUpperCase } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/components/ui/Loader";

interface Props {
  pokemonItem: PokemonTypes;
  pokemonObject: PokemonSpecies;
}

function PokemonType({ pokemonItem, pokemonObject }: Props) {
  const { data: pokemonSpicies } = useQuery({
    queryKey: ["pokemonSpecies"],
    queryFn: () => getPokemonSpecies(pokemonObject.species.url),
  });

  if (!pokemonSpicies) return <Loader />;
  const pokemonColor = pokemonSpicies?.color.name;

  return (
    <div className="grid">
      <p
        className="text-center mt-3 rounded-xl border-4 p-1"
        style={{ color: pokemonColor, borderColor: pokemonColor }}
      >
        {changeToUpperCase(pokemonItem?.type?.name)}
      </p>
    </div>
  );
}

export default PokemonType;
