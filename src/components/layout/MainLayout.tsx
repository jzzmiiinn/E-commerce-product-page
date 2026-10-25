import { Navbar } from "./Navbar";
import { ProductGallery } from "../product/ProductGallery";
import { ProductInfo } from "../product/ProductInfo";
import { QuantitySelector } from "../product/QuantitySelector";

export const MainLayout = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-6 py-8 md:grid-cols-2 md:gap-16 md:px-10 md:py-16">
        <ProductGallery />

        <div className="flex flex-col gap-8">
          <ProductInfo />

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <QuantitySelector />

            <button
              type="button"
              className="flex min-h-14 w-full items-center justify-center gap-4 rounded-lg bg-[hsl(26,100%,55%)] px-6 py-4 font-bold text-gray-900 shadow-lg shadow-orange-200 transition hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 sm:flex-1"
            >
              <img src="/icon-cart.svg" alt="" className="h-5 w-5" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
