"use client";

import { twMerge } from "tailwind-merge";
import EntregaRapida from "@/assets/images/entrega-rapida.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header className="bg-amber-950 text-white flex items-center justify-center sm:justify-between w-full py-6 px-12">
      <Link className="flex items-center gap-4" href={"/"}>
        <Image
          src={EntregaRapida}
          alt="Entrega Rápida"
          width={50}
          height={50}
        />
        <h1 className="text-2xl sm:text-3xl mr-2">SuperPack Store</h1>
      </Link>

      <nav className="hidden sm:flex gap-12 items-center text-xl">
        <button
          className="hover:border-b border-white transition duration-300"
          onClick={() => scrollToSection("youtube-video")}
        >
          Promocional
        </button>
        <button
          className="hover:border-b border-white transition duration-300"
          onClick={() => scrollToSection("products")}
        >
          Produtos
        </button>
      </nav>
    </header>
  );
}
