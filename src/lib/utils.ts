import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractYouTubeID(url: string) {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

export function formatPrice(price: number) {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function formatDiscount(price: number, discount: number) {
  return price - discount;
}

export function formatDiscountPercentage(price: number, discount: number) {
  return Number((discount / price) * 100).toFixed(2);
}

export const mockData = {
  video_headline: "Descubra os melhores produtos para você!",
  video_sub_headline: "Veja nossos destaques e faça suas compras com desconto.",
  video_url: "https://www.youtube.com/watch?v=YUH1IeR1sqo",
  products: [
    {
      name: "Rune arrowtips",
      price: 49.99,
      discount: 10,
      best_choice: true,
      freight: "Frete grátis",
      image_url:
        "https://secure.runescape.com/m=itemdb_oldschool/1727876892777_obj_big.gif?id=44",
    },
    {
      name: "Rune axe",
      price: 29.99,
      discount: 0,
      best_choice: false,
      freight: "Consulte o frete",
      image_url:
        "https://secure.runescape.com/m=itemdb_oldschool/1727876892777_obj_big.gif?id=1359",
    },
    {
      name: "Rune battleaxe",
      price: 79.99,
      discount: 15,
      best_choice: false,
      freight: "Frete grátis",
      image_url:
        "https://secure.runescape.com/m=itemdb_oldschool/1727876892777_obj_big.gif?id=1373",
    },
    {
      name: "Rune arrowtips",
      price: 49.99,
      discount: 10,
      best_choice: true,
      freight: "Frete grátis",
      image_url:
        "https://secure.runescape.com/m=itemdb_oldschool/1727876892777_obj_big.gif?id=44",
    },
    {
      name: "Rune axe",
      price: 29.99,
      discount: 0,
      best_choice: false,
      freight: "Consulte o frete",
      image_url:
        "https://secure.runescape.com/m=itemdb_oldschool/1727876892777_obj_big.gif?id=1359",
    },
    {
      name: "Rune battleaxe",
      price: 79.99,
      discount: 15,
      best_choice: false,
      freight: "Frete grátis",
      image_url:
        "https://secure.runescape.com/m=itemdb_oldschool/1727876892777_obj_big.gif?id=1373",
    },
    {
      name: "Rune arrowtips",
      price: 49.99,
      discount: 10,
      best_choice: true,
      freight: "Frete grátis",
      image_url:
        "https://secure.runescape.com/m=itemdb_oldschool/1727876892777_obj_big.gif?id=44",
    },
    {
      name: "Rune axe",
      price: 29.99,
      discount: 0,
      best_choice: false,
      freight: "Consulte o frete",
      image_url:
        "https://secure.runescape.com/m=itemdb_oldschool/1727876892777_obj_big.gif?id=1359",
    },
    {
      name: "Rune battleaxe",
      price: 79.99,
      discount: 15,
      best_choice: false,
      freight: "Frete grátis",
      image_url:
        "https://secure.runescape.com/m=itemdb_oldschool/1727876892777_obj_big.gif?id=1373",
    },
  ],
};
