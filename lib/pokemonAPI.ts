const POKEMON_API = "https://pokeapi.co/api/v2/";

export async function getPokemonList(skip: number) {
  const response = await fetch(POKEMON_API + `pokemon?limit=24&offset=${skip}`);
  const data = await response.json();
  return data.results;
}

export async function getPokemon(url: string) {
  const response = await fetch(POKEMON_API + "pokemon/" + url);
  const data = await response.json();
  return data;
}

export async function getPokemonInfo(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
