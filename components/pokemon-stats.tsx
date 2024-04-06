import { PokemonStat } from "@/lib/types";
import { changeToUpperCase } from "@/lib/utils";
import { Progress } from "@radix-ui/react-progress";

interface Props {
  statObject: PokemonStat;
}

function PokemonStats({ statObject }: Props) {
  const statName = changeToUpperCase(statObject.stat.name);
  const statValue = statObject.base_stat;

  return (
    <div className="flex items-stretch w-96" key={statName}>
      <h3 className="p-3 w-2/4">{statName}:</h3>
      <h3 className="p-3">{statValue}</h3>
      <Progress className="w-2/4 m-auto" value={statValue} />
    </div>
  );
}

export default PokemonStats;
