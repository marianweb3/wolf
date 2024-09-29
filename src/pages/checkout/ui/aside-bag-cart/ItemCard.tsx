import React from "react";

interface ItemCardProps {
  className?: string;
}

const ItemCard = ({ className }: ItemCardProps) => {
  const title = "the real lanwolf";
  const size = "m";
  const color = "white";
  const qty = 1;
  const price = 78;

  return (
    <div className={`flex gap-[14px] py-[24px] ${className}`}>
      <div
        className={
          " bg-[#FFD85A] border-2 border-black size-[99px] md:size-[139px]"
        }
      >
        <img
          src="/clothes/t-shirt-checkout.svg"
          alt="shirt"
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
