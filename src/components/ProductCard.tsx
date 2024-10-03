import { twMerge } from "tailwind-merge";
import ProductModal from "./ProductModal";
import Image from "next/image";
import { Product } from "@/lib/api";
import { formatDiscount, formatDiscountPercentage, formatPrice } from "@/lib/utils";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className={twMerge(
        "w-full sm:w-[250px] flex flex-col p-4 border-2 border-gray-200 rounded-lg relative",
        product.best_choice ? "border-green-600" : ""
      )}
    >
      {product.best_choice && (
        <div className="absolute text-sm text-white right-0 top-0 px-2 py-1 rounded-bl bg-green-600 font-bold">
          Melhor escolha
        </div>
      )}

      <Image
        src={product.image_url}
        alt={product.name}
        width={200}
        height={200}
        className="self-center"
      />

      <div className="text-xl font-bold truncate mb-2" title={product.name}>
        {product.name}
      </div>

      <div className="flex flex-col mb-4">
        {product.discount > 0 ? (
          <p className="text-lg text-green-600 font-bold">
            {formatPrice(formatDiscount(product.price, product.discount))}
          </p>
        ) : (
          <p className="text-lg font-bold">{formatPrice(product.price)}</p>
        )}

        {product.discount > 0 ? (
          <div className="flex">
            <span className="bg-green-600 p-1 font-bold rounded text-xs text-white mr-1">
              -{formatDiscountPercentage(product.price, product.discount)}%
            </span>
            <p className="text-sm line-through text-gray-600 font-bold">
              {formatPrice(product.price)}
            </p>
          </div>
        ) : null}
      </div>

      <p className="text-sm mb-2 truncate mt-auto">{product.freight}</p>
      <ProductModal product={product} />
    </div>
  );
}
