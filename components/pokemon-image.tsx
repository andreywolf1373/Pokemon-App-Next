"use client";
import Image from "next/image";

export function PokemonImage({ image, name }: { image: string; name: string }) {
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
