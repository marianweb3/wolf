import { useState } from "react";

const ProductImageGallery = () => {
  const images = [
    {
      id: 1,
      src: "/clothes/t-shirt.png",
      alt: "Main product image",
    },
    {
      id: 2,
      src: "/clothes/product-t-shirt.png",
      alt: "Side product image 1",
    },
    {
      id: 3,
      src: "/clothes/product-t-shirt.png",
      alt: "Side product image 2",
    },
    {
      id: 4,
      src: "/clothes/product-t-shirt.png",
      alt: "Side product image 3",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex gap-5 w-full mt-[25px] lg:flex-row flex-col xl:max-w-[792px] 2xl:max-w-[936px] shrink-0 2xl:items-normal items-start">
      <div className="flex flex-row lg:flex-col gap-3 md:gap-[23px] order-last lg:order-first flex-wrap">
        {images.map((image) => (
          <div
            key={image.id}
            className="size-[115px] cursor-pointer  border-2 border-black"
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.src} alt={image.alt} className="object-cover" />
          </div>
        ))}
      </div>

      {/* Main image */}
      <div className="w-full flex justify-center items-center bg-blue-100">
        <img
          src={selectedImage.src}
          alt={selectedImage.alt}
          className="max-w-[783px] w-full aspect-square"
        />
      </div>
    </div>
  );
};

export default ProductImageGallery;
