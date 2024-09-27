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
    <section className="bg-black flex flex-col gap-12 justify-center items-center relative z-10">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute w-full h-[120%] z-0"
      />

      {/* Header */}
      <div className="max-w-[1600px] mx-auto w-full flex items-center justify-between relative">
        <h2 className="font-saotorpes text-[48px] leading-[36.34px] text-white">
          {title}
        </h2>
        <div className="flex gap-3">
          <button
            onClick={scrollPrev}
            className={`w-[60px] h-[60px] bg-white rounded-full grid place-content-center ${
              !canScrollPrev ? "opacity-50" : ""
            }`}
          >
            <img src="/icons/arrow.svg" alt="Arrow Left" />
          </button>
          <button
            onClick={scrollNext}
            className={`w-[60px] h-[60px] bg-white rounded-full grid place-content-center ${
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
        <div className="flex gap-4 mr-4">
          {items.map((item, index) => (
            <ProductItem
              key={index}
              title={item.title}
              price={item.price}
              image={item.image}
            />
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
    </section>
  );
};

export default ClothingCollection;
