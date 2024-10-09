import React from "react";
import NumberControl from "@/components/common/form/number-control";
import { API } from "@/utils/api";

interface CartItemProps {
  img: string;
  title: string;
  price: string;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  img,
  title,
  price,
  selectedSize,
  selectedColor,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  const numericPrice = parseFloat(price);
  const isOutOfStock = quantity === 0;

  const handleQuantityChange = (newValue: number) => {
    if (newValue > quantity) {
      onIncrease();
    } else if (newValue < quantity) {
      onDecrease();
    }
  };

  return (
    <div className="border-b-2 border-black py-4">
      <div className="flex items-start space-x-4">
        <div
          className="w-full max-w-[139px] h-[123px] flex-shrink-0 border border-black"
          style={{ backgroundColor: "#e6f7ff" }}
        >
          <img
            src={`${API.api}/${img}`}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-grow flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h3 className="font-saotorpes text-[18px] text-black">{title}</h3>
            <div className="text-right">
              <span className="font-bold font-maladroit text-[20px] leading-[25.16px]">
                ${numericPrice.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="font-maladroit text-[18px] font-bold">
            SIZE: {selectedSize}
          </div>

          <div className="font-maladroit text-[18px] font-bold">
            COLOR: {selectedColor}
          </div>

          {isOutOfStock ? (
            <div className="text-[#cccccc] font-bold p-[6px] border-2 border-[#cccccc] max-w-[138px] text-center font-maladroit leading-[20.13px]">
              OUT OF STOCK
            </div>
          ) : (
            <div className="flex items-center gap-6 mt-2">
              <NumberControl
                value={quantity}
                onChange={handleQuantityChange}
                min={1}
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
