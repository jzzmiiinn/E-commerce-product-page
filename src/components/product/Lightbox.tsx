import { useEffect } from "react";

type LightboxProps = {
  selectedImage: number;
  onImageChange: (index: number) => void;
  onClose: () => void;
};

const images = [
  "/image-product-1.jpg",
  "/image-product-2.jpg",
  "/image-product-3.jpg",
  "/image-product-4.jpg",
];

export const Lightbox = ({
  selectedImage,
  onImageChange,
  onClose,
}: LightboxProps) => {
  const previousImage = () => {
    onImageChange(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
  };

  const nextImage = () => {
    onImageChange(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") previousImage();
      if (event.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Product image gallery"
        className="relative w-full max-w-sm"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close lightbox"
          className="ml-auto mb-5 block text-3xl font-bold text-white transition hover:text-orange-500"
        >
          ×
        </button>

        <div className="relative">
          <img
            src={images[selectedImage]}
            alt={`Sneaker product view ${selectedImage + 1}`}
            className="aspect-square w-full rounded-xl object-cover"
          />

          <button
            type="button"
            onClick={previousImage}
            aria-label="Previous image"
            className="absolute left-0 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl font-bold shadow transition hover:text-orange-500"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-0 top-1/2 flex h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl font-bold shadow transition hover:text-orange-500"
          >
            ›
          </button>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => onImageChange(index)}
              aria-label={`Show product image ${index + 1}`}
              aria-pressed={selectedImage === index}
              className={`overflow-hidden rounded-lg border-2 transition ${
                selectedImage === index
                  ? "border-orange-500"
                  : "border-transparent hover:border-orange-300"
              }`}
            >
              <img
                src={image.replace(".jpg", "-thumbnail.jpg")}
                alt=""
                className={`aspect-square w-full object-cover ${
                  selectedImage === index ? "opacity-50" : ""
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
