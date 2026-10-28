import { useState } from "react";
import { Lightbox } from "./Lightbox";

const images = [
  "/image-product-1.jpg",
  "/image-product-2.jpg",
  "/image-product-3.jpg",
  "/image-product-4.jpg",
];

const thumbnails = [
  "/image-product-1-thumbnail.jpg",
  "/image-product-2-thumbnail.jpg",
  "/image-product-3-thumbnail.jpg",
  "/image-product-4-thumbnail.jpg",
];

export const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <div className="mx-auto w-full max-w-md">
        <button
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          aria-label="Open enlarged product image"
          className="block w-full overflow-hidden rounded-2xl"
        >
          <img
            src={images[selectedImage]}
            alt={`Sneaker product view ${selectedImage + 1}`}
            className="aspect-square w-full cursor-zoom-in object-cover"
          />
        </button>

        <div className="mt-6 hidden grid-cols-4 gap-4 sm:grid">
          {thumbnails.map((thumbnail, index) => (
            <button
              key={thumbnail}
              type="button"
              onClick={() => setSelectedImage(index)}
              aria-label={`Show product image ${index + 1}`}
              aria-pressed={selectedImage === index}
              className={`overflow-hidden rounded-xl border-2 ${
                selectedImage === index
                  ? "border-orange-500"
                  : "border-transparent hover:border-orange-300"
              }`}
            >
              <img
                src={thumbnail}
                alt=""
                className={`aspect-square w-full object-cover ${
                  selectedImage === index ? "opacity-50" : ""
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {isLightboxOpen && (
        <Lightbox
          selectedImage={selectedImage}
          onImageChange={setSelectedImage}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </>
  );
};
