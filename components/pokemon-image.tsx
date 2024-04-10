import { PokemonImageInterface } from "@/lib/types";
import Image from "next/image";

export function PokemonImage({ image, name }: PokemonImageInterface) {
  if (!image || !name) return;

  return (
    <Image
      src={image}
      alt={"Picture of " + name}
      priority
      width={500}
      height={500}
      className="transition-opacity opacity-0 duration-[2s]"
      onLoadingComplete={(image) => image.classList.remove("opacity-0")}
    />
  );
}
