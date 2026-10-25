import { useState } from "react";

export const ProductGallery = () => {
  const thumbnails: string[] = [
    "/image-product-1-thumbnail.jpg",
    "/image-product-2-thumbnail.jpg",
    "/image-product-3-thumbnail.jpg",
    "/image-product-4-thumbnail.jpg",
  ];

  const mainImages: string[] = [
    "/image-product-1.jpg",
    "/image-product-2.jpg",
    "/image-product-3.jpg",
    "/image-product-4.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section className="w-full space-y-6">
      <div className="overflow-hidden rounded-2xl">
        <img
          className="aspect-square w-full object-cover"
          src={mainImages[selectedImage]}
          alt={`Product view ${selectedImage + 1}`}
        />
      </div>
      <div className="hidden grid-cols-4 gap-6 sm:grid">
        {thumbnails.map((thumbnail, index) => (
          <button
            key={thumbnail}
            type="button"
            onClick={() => setSelectedImage(index)}
            aria-label={`Show product image ${index + 1}`}
            aria-pressed={selectedImage === index}
            className={`overflow-hidden rounded-xl border-2 transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${
              selectedImage === index
                ? "border-orange-500"
                : "border-transparent hover:border-orange-300"
            }`}
          >
            <img
              className={`aspect-square w-full object-cover transition-opacity duration-200 ${
                selectedImage === index
                  ? "opacity-50"
                  : "opacity-100 hover:opacity-70"
              }`}
              src={thumbnail}
              alt=""
            />
          </button>
        ))}
      </div>
    </section>
  );
};
