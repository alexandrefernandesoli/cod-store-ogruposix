import { Product } from "@/lib/api";
import { formatDiscount, formatDiscountPercentage, formatPrice } from "@/lib/utils";
import Image from "next/image";

export default function ProductModalInfo({ product }: { product: Product }) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Image
        className="w-24"
        width={250}
        height={250}
        src={product.image_url}
        alt={product.name}
      />

      <h3 className="text-xl font-bold mt-4 sm:mb-4">{product.name}</h3>

      <p className="text-lg font-bold">
        {product.discount > 0
          ? formatPrice(formatDiscount(product.price, product.discount))
          : formatPrice(product.price)}
      </p>

      {product.discount > 0 ? (
        <div className="flex sm:mb-4">
          <span className="bg-green-600 p-1 font-bold rounded text-xs text-white mr-1">
            -{formatDiscountPercentage(product.price, product.discount)}%
          </span>
          <p className="text-sm line-through text-gray-600 font-bold">
            {formatPrice(product.price)}
          </p>
        </div>
      ) : null}

      <p className="text-sm mb-2 truncate">{product.freight}</p>
    </div>
  );
}
