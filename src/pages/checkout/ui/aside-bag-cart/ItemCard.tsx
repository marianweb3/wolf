import React from "react";
import { CartItem } from "@/store/cartStore";
import { API } from "@/utils/api";

interface ItemCardProps {
  className?: string;
  item: CartItem;
}

const ItemCard = ({ className, item }: ItemCardProps) => {
  // const title = "the real lanwolf";
  // const size = "m";
  // const color = "white";
  // const qty = 1;
  // const price = 78;

  const title = item.title;
  const size = item.selectedSize;
  const color = item.selectedColor;
  const qty = item.quantity;
  const price = item.price;
  const image = item.img;

  return (
    <div className={`flex gap-[14px] py-[24px] ${className}`}>
      <div
        className={
          " bg-[#FFD85A] border-2 border-black size-[99px] md:size-[139px]"
        }
      >
        <img
          src={`${API.api}/${image}`}
          alt={image}
          className={"w-full h-full"}
        />
      </div>

      <div className={"flex flex-col gap-[8px]"}>
        <h3 className={"details_text_header"}>{title}</h3>
        <h3 className={"details_text"}>size: {size}</h3>
        <h3 className={"details_text"}>color: {color}</h3>
        <h3 className={"details_text"}>qty: {qty}</h3>
        <h3 className={"details_text"}>${price}</h3>
      </div>
    </div>
  );
};

export default ItemCard;
