"use client";

import useCart from "@/hooks/use-cart";
import usePreviewModal from "@/hooks/use-preview-modal";
import { Product } from "@/types";
import { ShoppingCart } from "lucide-react";
import { MouseEventHandler } from "react";
import Button from "./ui/button";
import Currency from "./ui/currency";

interface InfoProps {
  data: Product;
}

export default function Info({ data }: InfoProps) {
  const cart = useCart();
  const previewModal = usePreviewModal();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onClose();
    cart.addItem(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data.size.name}</div>
        </div>
        <div className="flex items-center gap-x-1">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add To Cart <ShoppingCart />
        </Button>
      </div>
    </div>
  );
}
