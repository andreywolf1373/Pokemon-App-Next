import { PokemonTypes } from "@/lib/types";
import { changeToUpperCase } from "@/lib/utils";

interface Props {
  pokemonItem: PokemonTypes;
}

function PokemonType({ pokemonItem }: Props) {
  return (
    <div className="grid">
      <p className="text-center mt-3 rounded-xl border-4 p-1">
        {changeToUpperCase(pokemonItem?.type?.name)}
      </p>
    </div>
  );
}

export default PokemonType;
