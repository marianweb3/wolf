import NumberControl from "@/components/common/form/number-control";
import React from "react";

interface CartItemProps {
  name: string;
  size: string;
  price: number;
  salePrice?: number;
  imageUrl: string;
  isOutOfStock?: boolean;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

const CartItem = ({
  name,
  size,
  price,
  salePrice,
  imageUrl,
  isOutOfStock = false,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) => {
  return (
    <div className="border-b-2 border-black py-4">
      <div className="flex items-start space-x-4">
        <div
          className={`w-full max-w-[139px] h-[123px] flex-shrink-0 border border-black `}
          style={{ backgroundColor: "#e6f7ff" }}
        >
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-grow flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h3 className="font-saotorpes text-[18px] text-black">{name}</h3>
            <div className="text-right">
              {salePrice ? (
                <div className="flex gap-2">
                  <span className="relative text-[#000000] font-maladroit text-[20px] font-bold">
                    ${price}{" "}
                    <svg
                      className="absolute top-1/2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="4"
                      viewBox="0 0 46 4"
                      fill="none"
                    >
                      <path
                        d="M2 2C15.9931 2.08089 29.9995 2.36873 44 2"
                        stroke="#FF0000"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                  <span className="text-[#FF0000] font-maladroit text-[20px] font-bold">
                    ${salePrice}
                  </span>
                </div>
              ) : (
                <span className="font-bold font-maladroit text-[20px] leading-[25.16px]">
                  ${price}
                </span>
              )}
            </div>
          </div>

          <div className="font-maladroit text-[18px] font-bold">
            SIZE: {size}
          </div>

          {isOutOfStock ? (
            <div className="text-[#cccccc] font-bold p-[6px] border-2 border-[#cccccc] max-w-[138px] text-center font-maladroit leading-[20.13px]">
              OUT OF STOCK
            </div>
          ) : (
            <div className="flex items-center gap-6 mt-2">
              <NumberControl
                value={quantity}
                onChange={() => {}}
                min={0}
                max={10}
              />

              <button
                className="text-[#cccccc] font-maladroit text-[16px] font-bold underline hover:text-black"
                onClick={onRemove}
              >
                REMOVE
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
