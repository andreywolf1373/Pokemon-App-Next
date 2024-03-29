"use client";
import Image from "next/image";

interface PokemonImage {
  image: string;
  name: string;
}

export function PokemonImage({ image, name }: PokemonImage) {
  return (
    <Image
      src={image}
      alt={"Picture of " + name}
      priority
      fill
      className="transition-opacity opacity-0 duration-[2s] max-w-xs max-h-"
      onLoadingComplete={(image) => image.classList.remove("opacity-0")}
    />
  );
}
