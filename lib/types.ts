export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: PokemonStatInfo;
}

export interface PokemonCardProps {
  name: string;
}

export interface Pokemon {
  name: string;
}

export interface PokemonGridProps {
  pokemonList: Pokemon[];
}

export interface PokemonImage {
  image: string;
  name: string;
}

interface PokemonStatInfo {
  name: string;
  url: string;
}
