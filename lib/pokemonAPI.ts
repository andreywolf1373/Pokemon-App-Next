const POKEMON_API = "https://pokeapi.co/api/v2/";

export async function getPokemonList(skip: number) {
  const response = await fetch(POKEMON_API + `pokemon?limit=20&offset=${skip}`);
  const data = await response.json();
  return data.results;
}

export async function getPokemon(url: string) {
  const response = await fetch(POKEMON_API + "pokemon/" + url);
  const data = await response.json();
  return data;
}

export async function getPokemonAbilityInfo(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getPokemonSpecies(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
