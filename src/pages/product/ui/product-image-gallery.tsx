import React, { useState } from "react";
import { Image } from "@/pages/product";
import { API } from "@/utils/api";

interface ProductImageGalleryProps {
  images: Image[];
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  images,
}) => {
  const [selectedImage, setSelectedImage] = useState<Image>(images[0]);

  return (
    <div className="flex gap-5 w-full mt-[25px] lg:flex-row flex-col xl:max-w-[792px] 2xl:max-w-[936px] shrink-0 2xl:items-normal items-start">
      <div className="flex flex-row lg:flex-col gap-3 md:gap-[23px] order-last lg:order-first flex-wrap">
        {images.map((image) => (
          <div
            key={image.id}
            className="size-[115px] cursor-pointer  border-2 border-black"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={`${API.api}/${image.imagePath}`}
              alt={image.imagePath}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Main image */}
      <div className="w-full flex justify-center items-center bg-blue-100">
        <img
          src={`${API.api}/${selectedImage.imagePath}`}
          alt={selectedImage.imagePath}
          className="max-w-[783px] w-full aspect-square"
        />
      </div>
    </div>
  );
};

export default ProductImageGallery;
