const POKEMON_API = "https://pokeapi.co/api/v2/";

// only name'n url for details

export async function getPokemonList() {
  const response = await fetch(POKEMON_API + "pokemon?limit=100&offset=0");
  const data = await response.json();
  return data.results;
}

export async function getPokemon(url: any) {
  const response = await fetch(POKEMON_API + "pokemon/" + url);
  const data = await response.json();
  return data;
}
