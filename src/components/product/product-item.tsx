import React from "react";
import { Link } from "react-router-dom";

interface ProductItemProps {
  title: string;
  price: number;
  image: string;
  isBlack?: boolean;
  onBuy?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({
  title,
  price,
  image,
  isBlack = false,
  onBuy,
}) => {
  const textColor = isBlack ? "text-black" : "text-white";
  const borderColor = isBlack ? "border-black" : "border-white";

  return (
    <Link to="/product/1" className="shrink-0 grow-0 flex justify-center">
      <div className="flex flex-col gap-4 max-w-[520px]">
        <div className="bg-[#8CE6FF] px-[18px] py-6 border-2 border-black aspect-square">
          <img
            src={image}
            alt={title}
            className="object-cover 2xl:object-none h-full w-full"
          />
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
            {price} USDT
          </span>
          <button
            onClick={onBuy}
            className="font-maladroit text-white font-bold text-[18px] leading-[22.64px] bg-black py-2 px-4 mt-2"
          >
            Buy
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
