import { PokemonCardProps } from "@/lib/types";
import { changeToUpperCase } from "@/lib/utils";
import Link from "next/link";

export function PokemonCard({ name }: PokemonCardProps) {
  return (
    <Link
      href={name}
      className="group rounded-lg border border-white m-3 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-black "
      key={name + "Card"}
    >
      <h2 className={`text-2xl font-semibold`}>{changeToUpperCase(name)}</h2>
    </Link>
  );
}
