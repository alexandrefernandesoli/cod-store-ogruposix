"use client";

import { Product } from "@/lib/api";
import { useState } from "react";
import Button from "./Button";
import ProductModalForm from "./ProductModalForm";
import ProductModalInfo from "./ProductModalInfo";
import CloseIcon from "./CloseIcon";

export default function ProductModal({ product }: { product: Product }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "";
    setShowThankYou(false);
  }

  function setSuccess() {
    setShowThankYou(true);
  }

  return (
    <>
      <Button onClick={openModal}>Comprar</Button>
      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          style={{ display: isOpen ? "flex" : "none" }}
          onClick={() => (showThankYou ? closeModal() : null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-screen overflow-auto p-8 bg-white rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="absolute top-0 right-0 p-4" onClick={closeModal}>
              <CloseIcon />
            </button>
            <div className="flex sm:flex-row flex-col">
              {showThankYou ? (
                <div className="flex-1 py-4 sm:px-8 sm:py-0">
                  <h2 className="text-xl font-bold text-center">
                    Obrigado pela compra!
                  </h2>
                  <p className="text-center mt-4">
                    Em breve entraremos em contato para finalizar a compra.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex flex-col border-b sm:border-r sm:border-b-0 flex-1 items-center sm:items-start">
                    <ProductModalInfo product={product} />
                  </div>
                  <div className="flex-1 py-4 sm:px-8 sm:py-0">
                    <ProductModalForm
                      product={product}
                      onSuccess={setSuccess}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
