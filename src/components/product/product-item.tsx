import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@/pages/product";
import { API } from "@/utils/api";

interface ProductItemProps {
  title: string;
  price: number;
  image: Image | undefined;
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
    <Link
      to={`/product/${title}`}
      className="w-full grow-0 flex justify-center"
    >
      <div className="flex flex-col gap-4 md:max-w-[520px] w-full">
        <div className="bg-[#8CE6FF] px-[18px] py-6 border-2 border-black aspect-square md:size-[520px]">
          <img
            src={`${API.api}/${image?.imagePath}`}
            alt={image?.imagePath}
            className="object-cover h-full w-full "
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h3
              className={`font-saotorpes text-[24px] leading-[21.6px] ${textColor}`}
            >
              {title}
            </h3>
            {/*<div*/}
            {/*  className={`size-10 rounded-full bg-white grid place-content-center ${borderColor} border-2`}*/}
            {/*>*/}
            {/*  <img src="/header/cart.svg" alt="Cart" />*/}
            {/*</div>*/}
          </div>
          <span
            className={`font-maladroit ${textColor} font-bold text-[18px] leading-[22.64px]`}
          >
            {price} USDT
          </span>
          {/*<button*/}
          {/*  onClick={onBuy}*/}
          {/*  className="font-maladroit text-white font-bold text-[18px] leading-[22.64px] bg-black py-2 px-4 mt-4"*/}
          {/*>*/}
          {/*  Buy*/}
          {/*</button>*/}
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
