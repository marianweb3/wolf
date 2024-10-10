import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@/pages/product";
import { API } from "@/utils/api";
import clsx from "clsx";

interface ProductItemProps {
  title: string;
  price: number;
  image: Image | undefined;
  isBlack?: boolean;
  onBuy?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const FoundItem: React.FC<ProductItemProps> = ({
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
      className="flex pb-3 justify-center border-b border-[rgba(255,255,255,0.40)] lg:border-none"
    >
      <div className="flex flex-col sm:flex-row items-center lg:items-baseline lg:flex-col gap-6 w-full">
        <div className="bg-[#8CE6FF] p-2 lg:p-5 size-[200px] lg:size-[320px] xl:size-[395px] 2xl:size-[495px]">
          <img
            src={`${API.api}/${image?.imagePath}`}
            alt={image?.imagePath}
            className="object-cover h-full w-full"
          />
        </div>

        <div className="flex flex-col items-center sm:items-baseline gap-1">
          <div className="flex items-center justify-between">
            <h3
              className={clsx(
                `font-saotorpes text-[20px] md:text-[24px] leading-[21.6px] ${textColor}`,
                "max-w-[350px] lg:max-w-[320px] xl:max-w-[395px] 2xl:max-w-[495px] overflow-hidden text-ellipsis whitespace-break-spaces"
              )}
            >
              {title}
            </h3>
          </div>
          <span
            className={`font-maladroit ${textColor} font-bold text-[16px] md:text-[18px] leading-[22.64px]`}
          >
            {price} USDT
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FoundItem;
