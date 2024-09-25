interface CarouselItemProps {
  title: string;
  price: string;
  image: string;
  isBlack?: boolean;
}

const ProductItem = ({
  title,
  price,
  image,
  isBlack = false,
}: CarouselItemProps) => {
  const textColor = isBlack ? "text-black" : "text-white";
  const borderColor = isBlack ? "border-black" : "border-white";

  return (
    <div className="shrink-0 grow-0 flex justify-center">
      <div className="flex flex-col gap-4 max-w-[520px]">
        <div className="bg-[#8CE6FF] h-[525px] px-[18px] py-6 border-2 border-black">
          <img src={image} alt={title} className="object-none h-full w-full" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h3
              className={`font-saotorpes text-[24px] leading-[21.6px] ${textColor}`}
            >
              {title}
            </h3>
            <div
              className={`size-10 rounded-full bg-white grid place-content-center ${borderColor} border-2`}
            >
              <img src="/header/cart.svg" alt="Cart" />
            </div>
          </div>
          <span
            className={`font-maladroit ${textColor} font-bold text-[18px] leading-[22.64px]`}
          >
            {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
