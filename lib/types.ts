export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: PokemonStatInfo;
  key: number;
}

export interface PokemonCardProps {
  name: string;
}

export interface Pokemon {
  name: string;
}

export interface PokemonGridProps {
  pokemonList: Pokemon[];
  isLoading: boolean;
}

export interface PokemonImageInterface {
  image: string;
  name: string;
}

interface PokemonStatInfo {
  name: string;
  url: string;
}

export interface PokemonAbility {
  ability: PokemonAbilityInfo;
  is_hidden: false;
  slot: number;
}

export interface PokemonTypes {
  slot: number;
  type: PokemonAbilityInfo;
}

interface PokemonAbilityInfo {
  name: string;
  url: string;
}

export interface PokemonSpecies {
  species: PokemonStatInfo;
}
