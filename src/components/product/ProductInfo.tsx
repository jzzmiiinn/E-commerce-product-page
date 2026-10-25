export const ProductInfo = () => {
  return (
    <section className="flex w-full flex-col gap-5">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
        Sneaker Company
      </p>

      <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
        Fall Limited Edition Sneakers
      </h1>

      <p className="text-base leading-7 text-gray-500">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      {/* Price section */}
      <div className="flex items-center gap-4">
        <span className="text-2xl font-bold text-gray-900">$125.00</span>
        <span className="rounded-md bg-gray-900 px-2 py-1 text-sm font-bold text-white">
          50%
        </span>
      </div>

      <p className="text-sm font-semibold text-gray-400 line-through">
        $250.00
      </p>
    </section>
  );
};
