import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ProductItem from "@/components/product/product-item";

interface CarouselItem {
  title: string;
  price: string;
  image: string;
}

interface ClothingCollectionProps {
  title: string;
  items: CarouselItem[];
  backgroundImage?: string;
  buttonLabel?: string;
  buttonAction?: () => void;
}

const ClothingCollection: React.FC<ClothingCollectionProps> = ({
  title,
  items,
  backgroundImage = "/default-bg.webp",
  buttonLabel = "All clothes",
  buttonAction,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="bg-black flex flex-col gap-12 justify-center items-center relative z-10">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute w-full h-[120%] z-0 md:object-fill object-cover"
      />

      {/* Header */}
      <div className="max-w-[1600px] mx-auto w-full flex items-center justify-between relative px-4 lg:px-0">
        <h2 className="font-saotorpes text-[28px] sm:text-[36px] md:text-[48px] leading-[32px] md:leading-[36.34px] text-white">
          {title}
        </h2>
        <div className="flex gap-2 sm:gap-3">
          <button
            onClick={scrollPrev}
            className={`w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] bg-white rounded-full grid place-content-center ${
              !canScrollPrev ? "opacity-50" : ""
            }`}
          >
            <img src="/icons/arrow.svg" alt="Arrow Left" />
          </button>
          <button
            onClick={scrollNext}
            className={`w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] bg-white rounded-full grid place-content-center ${
              !canScrollNext ? "opacity-50" : ""
            }`}
          >
            <img
              src="/icons/arrow.svg"
              alt="Arrow Right"
              className="scale-x-[-1]"
            />
          </button>
        </div>
      </div>

      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-1 px-2" // Adjust width based on viewport size
            >
              <ProductItem
                title={item.title}
                price={item.price}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <button
        onClick={buttonAction}
        className="relative py-[12.5px] w-full max-w-[372px] border-[3px] border-black bg-white font-maladroit text-[18px] leading-[22.64px] font-bold"
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default ClothingCollection;
